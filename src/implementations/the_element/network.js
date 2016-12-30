/**
* @Author: chris
* @Date:   2016-12-17T14:02:23+01:00
* @Filename: network.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:34:26+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const net = require('net')
const http = require('http')
const getMac = require('getmac')

/**
 * Get public IP address
 * @returns {Promise}
 */
function getPublicIP () {
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
function getInternalIP () {
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
function getMAC () {
  return new Promise(function (resolve, reject) {
    getMac.getMac(function (err, macAddress) {
      if (err) return reject(err)
      return resolve(macAddress)
    })
  })
}

module.exports = {
  getPublicIP,
  getInternalIP,
  getMAC
}
