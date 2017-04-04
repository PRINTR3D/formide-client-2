'use strict'

/**
 * This module handles Wi-Fi on MacOS.
 * Note: only works on devices that have no ethernet port since we use en0 as primary interface
 */

const exec = require('child_process').exec
const http = require('http')
const commands = {
  scan: '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport scan',
  connect: 'networksetup -setairportnetwork {IFACE} "{SSID}" "{PASSWORD}"',
  currentNetwork: 'networksetup -getairportnetwork {IFACE}',
  ip: 'ipconfig getifaddr {IFACE}',
  mac: 'networksetup -getmacaddress Wi-Fi'
}
const scanRegex = /([0-9a-zA-Z]{1}[0-9a-zA-Z]{1}[:]{1}){5}[0-9a-zA-Z]{1}[0-9a-zA-Z]{1}/
const iface = 'en0'

/**
 * Parse network scan output
 * Inspired by https://github.com/ancasicolica/node-wifi-scanner
 * @param str
 * @param callback
 */
function parseOutput (str, callback) {
  try {
    var lines = str.split('\n')
    var result = []
    for (var i = 1, l = lines.length; i < l; i++) {
      var mac = lines[i].match(scanRegex)
      if (!mac) continue
      var macStart = lines[i].indexOf(mac[0])
      var ssid = lines[i].substr(0, macStart).trim()
      result.push({ ssid })
    }
    return callback(null, result)
  } catch (err) {
    return callback(err)
  }
}

/**
 * Get MAC address from full terminal command response
 * @param input
 */
function parseMacAddress (input) {
  return input.split(' ')[2]
}

/**
 * Execute command line argument
 * @param cmd
 */
function execute (cmd, callback) {
  exec(cmd, function (err, stdout, stderr) {
    if (err || stderr) return callback(err || stderr)
    return callback(null, stdout.trim())
  })
}

/**
 * Get a list of nearby Wi-Fi networks
 * @returns {Promise}
 */
function list () {
  return new Promise(function (resolve, reject) {
    execute(commands.scan, function (err, networks) {
      if (err) return reject(err)
      parseOutput(networks, function (err, list) {
        if (err) return reject(err)
	      if (!list) return reject(new Error('No network list found'))
        return resolve(list)
      })
    })
  })
}

/**
 * Get current Wi-Fi status from fiw service
 * @returns {Promise}
 */
function status () {
  return new Promise(function (resolve, reject) {
    return resolve(true) // we fake this on MacOS
  })
}

/**
 * Get current network
 * @returns {Promise}
 */
function network () {
  return new Promise(function (resolve, reject) {
    execute(commands.currentNetwork.replace('{IFACE}', iface), function (err, network) {
      if (err) return reject(err)
      if (!network && typeof network === 'undefined') return reject(new Error('No network connection found'))
      
      console.log('network', network)
      
      try {
	      network = network.split(':')[1]
	      if (!network && typeof network === 'undefined') return resolve(false)
	      if (network) network = network.trim()
      } catch (e) {
        return reject(e)
      }
      
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
    execute(commands.ip.replace('{IFACE}', iface), function (err, ip) {
      if (err) return reject(err)
	    if (!ip) return reject(new Error('No IP found'))
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
    execute(commands.mac.replace('{IFACE}', iface), function (err, mac) {
      if (err) return reject(err)
	    if (!mac) return reject(new Error('No MAC address found'))
      return resolve(parseMacAddress(mac))
    })
  })
}

/**
 * Connect to a network by essid/password combo
 * @param config
 * @returns {Promise}
 */
function connect (config) {
  return new Promise(function (resolve, reject) {
    if (!config.ssid) return reject(new Error('SSID not found in config'))
    if (!config.password) return reject(new Error('Password not found in config'))

    execute(commands.connect.replace('{IFACE}', iface).replace('{SSID}', config.ssid).replace('{PASSWORD}', config.password), function (err, status) {
      if (err) return reject(err)
      return resolve(status)
    })
  })
}

/**
 * Reset Wi-Fi and fall back to hotspot mode
 * @returns {Promise}
 */
function reset () {
  return new Promise(function (resolve) {
    return resolve({ message: 'Successfully reset Wi-Fi' }) // we fake this on MacOS
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
