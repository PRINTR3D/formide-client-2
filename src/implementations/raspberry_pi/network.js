'use strict'

const net = require('net')
const http = require('http')
const getMac = require('getmac')
const network = require('network')

/**
 * Get current connection status (boolean)
 * @returns {Promise}
 */
function status () {
  return new Promise(function (resolve) {
	  network.get_active_interface(function (err, obj) {
	    if (err) return resolve(false)
      if (!obj) return resolve(false)
      return resolve(true)
    })
  })
}

/**
 * Get current network info
 * @returns {Promise}
 */
function network () {
	return new Promise(function (resolve) {
		network.get_active_interface(function (err, obj) {
			if (err) return resolve(false)
			if (!obj) return resolve(false)
			return resolve(obj.name)
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
 * Get internal IP address
 * @returns {Promise}
 */
function ip () {
  return new Promise(function (resolve, reject) {
    const client = net.connect({
      port: 80,
      host: 'google.com'
    }, function () {
      if (client.localAddress) {
        return resolve(client.localAddress)
      } else {
        return reject(false)
      }
    })
	
	  // handle request error
	  client.on('error', function (err) {
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
    getMac.getMac(function (err, macAddress) {
      if (err) return reject(err)
      return resolve(macAddress)
    })
  })
}

module.exports = {
	status,
  network,
  ip,
  publicIp,
  mac
}
