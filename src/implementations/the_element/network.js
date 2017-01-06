/**
* @Author: chris
* @Date:   2017-01-05T11:32:27+01:00
* @Filename: network.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T23:33:32+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const http = require('http')
const exec = require('child_process').exec
const bashEscape = require('./bashUtils').escape
const service = 'sudo fiw'

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
    exec(`${service} wlan0 cached-scan`, function (err, stdout) {
      if (err || !stdout) {
        exec(`${service} wlan0 scan`, function (err, stdout) {
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
 * Get current Wi-Fi status from fiw service
 * @returns {Promise}
 */
function status () {
  return new Promise(function (resolve, reject) {
    exec(`${service} wlan0 status`, function (err, stdout) {
      if (err) return reject(err)
      const isConnected = stdout.trim() === 'connected,configured'
      return resolve(isConnected)
    })
  })
}

/**
 * Get current network
 * @returns {Promise}
 */
function network () {
  return new Promise(function (resolve, reject) {
    exec(`${service} wlan0 network`, function (err, stdout) {
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
    exec(`${service} wlan0 ip`, function (err, stdout) {
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
    http.get('http://bot.whatismyipaddress.com', function (res) {
      res.setEncoding('utf8')
      res.on('data', function (chunk) {
        return resolve(chunk)
      })
      res.on('error', function (err) {
        return reject(err)
      })
    })
  })
}

/**
 * Get MAC address
 * @returns {Promise}
 */
function mac () {
  return new Promise(function (resolve, reject) {
    exec(`${service} wlan0 mac`, function (err, stdout) {
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
    const connectCommand = `${service} wlan0 connect ${essid} ${password}`.trim()

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

    exec(`${service} wlan0 connectWithConfig ${wpaSupplicant}`, function (err, stdout, stderr) {
      if (err || stderr) return reject(err || stderr)
      if (stdout.trim() !== 'OK') return reject(new Error(`Failed to connect to ${config.ssid}`))
      return resolve({ message: `Successfully connected to ${config.ssid}` })
    })
  })
}

/**
 * Reset Wi-Fi and fall back to hotspot mode
 * @returns {Promise}
 */
function reset () {
  return new Promise(function (resolve, reject) {
    exec(`${service} wlan0 reset`, function (err, stdout) {
      if (err) return reject(err)
      return resolve({ message: 'Successfully reset wlan0' })
    })
  })
}

module.exports = {
  list,
  status,
  network,
  ip,
  publicIp,
  mac,
  connect,
  reset
}
