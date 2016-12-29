'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert = require('assert')
const co = require('co')
const socket = require('./socket')
const proxy = require('./proxy')
const addToQueue = require('./addToQueue')
const getCallbackData = require('./getCallbackData')

class Cloud {

  /**
   * Create new Cloud
   * @param config
   */
  constructor (client) {
    assert(client, '[cloud] - client not passed')
    assert(client.config.http.api, '[cloud] - client.config.http.api not passed')
    assert(client.config.cloud.URL, '[cloud] - client.config.cloud.URL not passed')
    assert(client.config.cloud.platformURL, '[cloud] - client.config.cloud.platformURL not passed')
    assert(client.events, '[cloud] - client.events not passed')
    assert(client.db, '[cloud] - client.db not passed')
    assert(client.log, '[cloud] - client.log not passed')

    // set URLs
    this.URL = client.config.cloud.URL
    this.platformURL = client.config.cloud.platformURL

    // socket connections
    this.cloud = socket.cloud(client, client.config.cloud.URL)
    this.local = socket.local(client, client.config.http.api)

    // prevent .bind waterfall
    const self = this

    // forward all events to cloud
    client.events.onAny(function (data) {
      self.cloud.emit(this.event, data)
    })

    // socket events
    this.cloud.on('ping', function (data) {
      self.cloud.emit('pong', data)
    })

    // on connect
    this.cloud.on('connect', function () {
      co(function*() {
        const publicIP = yield client.network.getPublicIP()
        const internalIP = yield client.network.getInternalIP()
        const MAC = yield client.network.getMAC()

        // emit authentication data
        self.cloud.emit('authenticate', {
          type: 'client',
          ip: publicIP,
          ip_internal: internalIP,
          mac: MAC,
          version: require('../../package.json').version,
          environment: process.env.NODE_ENV,
          port: client.config.http.port
        }, function (response) {
          if (response.success) {
            client.log(`[cloud] - Cloud connected`, 1, 'info')
          } else {
            client.log(`[cloud] - Cloud not connected: ${response.message}`, 1, 'warn')
            client.log(`[cloud] - MAC address is ${MAC}`, 2, 'info')
          }
        })
      }).then(null, console.error)
    })

    // HTTP proxy calls are handled by the proxy function
    this.cloud.on('http', function (data) {
      client.log(`[cloud] - Cloud HTTP call: ${data.url}`, 2)
      proxy(client, data, function (err, response) {
        self.cloud.emit('http', getCallbackData(data._callbackId, err, response))
      })
    })

    // Adding to queue from Formide Cloud
    this.cloud.on('addToQueue', function (data) {
      client.log(`[cloud] - Cloud addToQueue: ${data.gcode}`, 1)
      addToQueue(client, data, function (err, response) {
        self.cloud.emit('addToQueue', getCallbackData(data._callbackId, err, response))
      })
    })

    // on disconnect try reconnecting when server did not ban client
    this.cloud.on('disconnect', function (data) {
      if (data !== 'io server disconnect') {
        client.log('[cloud] - Cloud disconnected, trying to reconnect...', 1, 'info')
        self.cloud.io.reconnect()
      }
    })
  }
}

module.exports = Cloud
