/**
* @Author: chris
* @Date:   2016-12-17T13:54:59+01:00
* @Filename: socket.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:34:56+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const socketClient = require('socket.io-client')

/**
 * Create new socket connection to Formide Cloud
 * @param url
 * @returns {*}
 */
function cloudSocket (client, url) {
  const conn = socketClient(url, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 1000,
    reconnectionDelayMax: 5000,
    transports: ['websocket'],
    timeout: 5000
  })

  conn.on('error', function (err) {
    client.log(`Cloud socket error: ${err.message}`, 1, 'error')
  })

  conn.on('connection_error', function (err) {
    client.log(`Cloud connection error: ${err.message}`, 1, 'error')
  })

  conn.on('connect_timeout', function (err) {
    client.log(`Cloud connection timeout: ${err.message}`, 1, 'warn')
  })

  conn.on('reconnect_failed', function (err) {
    client.log(`Cloud reconnect error: ${err.message}`, 1, 'error')
  })

  return conn
}

/**
 * Create new socket connection to local clients
 * @param port
 * @returns {*}
 */
function localSocket (client, port) {
  return socketClient(`ws://127.0.0.1:${port}`, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 1000,
    reconnectionDelayMax: 5000,
    transports: ['websocket', 'polling'],
    timeout: 5000
  })
}

module.exports = {
  cloud: cloudSocket,
  local: localSocket
}
