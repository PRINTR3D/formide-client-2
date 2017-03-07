'use strict'

const net = require('net')
const http = require('http')
const getMac = require('getmac')

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
  ip,
  publicIp,
  mac
}
