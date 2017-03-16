'use strict'

const http = require('http')
const exec = require('child_process').exec
const bashEscape = require('./bashUtils').escape
const fiw = 'sudo fiw' // custom script on The Element

/**
 * Filter list of networks to only return valid essids
 * @param stdout
 * @returns {{}}
 */
function getSsids (stdout) {
  const essids = stdout.split('\n').filter(a => a)
  let result = []

  for (const essid of essids) {
    // HACK: NAT-160: removing weird entries
    if (essid.startsWith('\\x')) continue

    // HACK: NAT-124: removing weird ping
    if (essid.startsWith('PING ')) break

    result.push({ ssid: essid })
  }

  return result
}

/**
 * Get a list of nearby Wi-Fi networks
 * @returns {Promise}
 */
function list () {
  return new Promise(function (resolve, reject) {
    exec(`${fiw} wlan0 cached-scan`, function (err, stdout) {
      if (err || !stdout) {
        exec(`${fiw} wlan0 scan`, function (err, stdout) {
          if (err) return reject(err)
          const result = getSsids(stdout)
          return resolve(result)
        })
      } else {
        const result = getSsids(stdout)
        return resolve(result)
      }
    })
  })
}

/**
 * Get current Wi-Fi status from fiw
 * @returns {Promise}
 */
function status () {
  return new Promise(function (resolve, reject) {
    exec(`${fiw} wlan0 status`, function (err, stdout) {
      if (err) return reject(err)
      const isConnected = stdout.trim() === 'connected,configured'
      return resolve(isConnected)
    })
  })
}

/**
 * Get current hotspot status from fiw
 * @returns {Promise}
 */
function hotspotStatus () {
  return new Promise(function (resolve, reject) {
	  exec(`${fiw} wlan1 status`, function (err, stdout) {
		  if (err) return reject(err)
		  const isHotspot = stdout.trim() === 'connected,configured'
		  return resolve(isHotspot)
	  })
  })
}

/**
 * Get current network
 * @returns {Promise}
 */
function network () {
  return new Promise(function (resolve, reject) {
    exec(`${fiw} wlan0 network`, function (err, stdout) {
      if (err) return reject(err)
      const network = stdout.trim()
      return resolve(network)
    })
  })
}

/**
 * Get IP address
 * @returns {Promise}
 */
function ip () {
  return new Promise(function (resolve, reject) {
    exec(`${fiw} wlan0 ip`, function (err, stdout) {
      if (err) return reject(err)
      const ip = stdout.trim()
      return resolve(ip)
    })
  })
}

/**
 * Get public IP address
 * @returns {Promise}
 */
function publicIp () {
  return new Promise(function (resolve, reject) {
    const request = http.get('http://bot.whatismyipaddress.com', function (res) {
      res.setEncoding('utf8')
      res.on('data', function (chunk) {
        return resolve(chunk)
      })
      res.on('error', function (err) {
        return reject(err)
      })
    })
    
    // handle request error
    request.on('error', function (err) {
      return reject(err)
    })
  })
}

/**
 * Get MAC address
 * @returns {Promise}
 */
function mac () {
  return new Promise(function (resolve, reject) {
    exec(`${fiw} wlan0 mac`, function (err, stdout) {
      if (err) return reject(err)
      const mac = stdout.trim()
      return resolve(mac)
    })
  })
}

/**
 * Connect to a network by essid/password combo
 * @param config
 * @returns {Promise}
 */
function connect (config) {
  // check which connection type to use
  if (Object.keys(config).length === 2) {
    return connectSimple(config.ssid, config.password)
  } else {
    return connectAdvanced(config)
  }
}

/**
 * Connect using SSID and password
 * @param essid
 * @param password
 * @returns {Promise}
 */
function connectSimple (essid, password) {
  return new Promise(function (resolve, reject) {
    if (essid == null || essid.length === 0 || essid.length > 32) {
      return reject(new Error('essid must be 1..32 characters'))
    }

    if (password.length !== 0 && (password.length < 8 || password.length > 63)) {
      return reject(new Error('password must be 8..63 characters, or 0 characters for an unprotected network'))
    }

    essid = bashEscape(essid)
    password = bashEscape(password)
    const connectCommand = `${fiw} wlan0 connect ${essid} ${password}`.trim()

    exec(connectCommand, function (err, stdout, stderr) {
      if (err || stderr) return reject(err || stderr)
      if (stdout.trim() !== 'OK') return reject(new Error(`Failed to connect to ${essid}`))
      return resolve({ message: `Successfully connected to ${essid}` })
    })
  })
}

/**
 * Connect using advanced wpa_supplicant configuration
 * @param config
 * @returns {Promise}
 */
function connectAdvanced (config) {
  return new Promise(function (resolve, reject) {
    // filter out fields that wpa_supplicant cannot handle
    const allowedFields = ['ssid', 'password', 'key_mgmt', 'eap', 'identity', 'anonymous_identity', 'phase1', 'phase2']
    for (var field in config) {
      if (allowedFields.indexOf(field) < 0) delete config[field]
    }

    // build wpa_supplicant config
    let wpaSupplicant = ''
    for (var param in config) {
      let wpaSupplicantCommand = ''
      if (param === 'key_mgmt' || param === 'eap') {
        wpaSupplicantCommand = bashEscape(`${param}=${config[param]}`)
      } else {
        wpaSupplicantCommand = bashEscape(`${param}="${config[param]}"`)
      }
      wpaSupplicant += wpaSupplicantCommand + ' '
    }

    exec(`${fiw} wlan0 connectWithConfig ${wpaSupplicant}`, function (err, stdout, stderr) {
      if (err || stderr) return reject(err || stderr)
      if (stdout.trim() !== 'OK') return reject(new Error(`Failed to connect to ${config.ssid}`))
      return resolve({ message: `Successfully connected to ${config.ssid}` })
    })
  })
}

/**
 * Reset Wi-Fi connection
 * @returns {Promise}
 */
function reset () {
  return new Promise(function (resolve, reject) {
    exec(`${fiw} wlan0 reset`, function (err, stdout, stderr) {
	    if (err || stderr) return reject(err || stderr)
      return resolve({ message: 'Successfully reset wlan0', stdout })
    })
  })
}

/**
 * Enable or disable hotspot mode
 * @returns {Promise}
 */
function hotspot (enabled) {
	return new Promise(function (resolve, reject) {
    if (enabled) {
	    exec(`${fiw} wlan1 start-ap`, function (err, stdout, stderr) {
		    if (err || stderr) return reject(err || stderr)
		    return resolve({ message: 'Successfully enabled hotspot', stdout })
	    })
    } else {
	    exec(`${fiw} wlan1 stop-ap`, function (err, stdout, stderr) {
		    if (err || stderr) return reject(err || stderr)
		    return resolve({ message: 'Successfully disabled hotspot', stdout })
	    })
    }
	})
}

module.exports = {
  list,
  status,
	hotspotStatus,
  network,
  ip,
  publicIp,
  mac,
  connect,
  reset,
	hotspot
}
