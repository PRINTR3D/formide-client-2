'use strict'

const assert = require('assert')
const co = require('co')
const socket = require('./socket')
const proxy = require('./proxy')
const downloadGcodeFromCloud = require('./downloadGcodeFromCloud')
const generateCloudCode = require('./generateCloudCode')
const getCallbackData = require('./getCallbackData')

// TODO: rewrite to separate package without client dependency

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
    // assert(client.db, '[cloud] - client.db not passed')
    assert(client.logger.log, '[cloud] - client.logger.log not passed')
    
    this._client = client

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
      // TODO: fix cloud error before trying to connect again!
      // co(function*() {
      //   const publicIP = yield client.system.network.publicIp()
      //   const internalIP = yield client.system.network.ip()
      //   const macAddress = yield client.system.network.mac()
      //
      //   // emit authentication data
      //   self.cloud.emit('authenticate', {
      //     type: 'client',
      //     ip: publicIP,
      //     ip_internal: internalIP,
      //     mac: macAddress,
      //     version: client.version,
      //     environment: process.env.NODE_ENV,
      //     port: client.config.http.port
      //   }, function (response) {
      //     if (response.success) {
      //       client.logger.log(`Cloud connected`, 'info')
      //     } else {
      //       client.logger.log(`Cloud not connected: ${response.message}`, 'warn')
      //       client.logger.log(`MAC address is ${macAddress}`, 'info')
      //     }
      //   })
      // }).then(null, console.error)
    })

    // HTTP proxy calls are handled by the proxy function
    this.cloud.on('http', function (data) {
      client.logger.log(`Cloud HTTP call: ${data.url}`, 'debug')
      proxy(client, data, function (err, response) {
        self.cloud.emit('http', getCallbackData(data._callbackId, err, response))
      })
    })

    // Adding a G-code file from the cloud
    this.cloud.on('printQueueItem', function (data) {
      client.logger.log(`Download cloud G-code: ${data.gcode}`, 'debug')
	    downloadGcodeFromCloud(self._client, data, function (err, stats) {
		    self._client.drivers.printQueueItem(data.port, stats.path, data.queueItemId, (err, response) => {
			    self.cloud.emit('printQueueItem', getCallbackData(data._callbackId, err, response))
		    })
      })
    })

    // on disconnect try reconnecting when server did not ban client
    this.cloud.on('disconnect', function (data) {
      if (data !== 'io server disconnect') {
        client.logger.log('Cloud disconnected, trying to reconnect...', 'warning')
        self.cloud.io.reconnect()
      }
    })
  }
	
	/**
   * Generate a cloud code to connect the client to a Formide account
	 * @returns {Promise}
	 */
	generateCode () {
	  const self = this
    return new Promise((resolve, reject) => {
	    self._client.system.network.mac().then((macAddress) => {
	      return generateCloudCode(self._client, macAddress)
      }).then((cloudCode) => {
	      return resolve(cloudCode)
      }).catch(reject)
    })
  }
}

module.exports = Cloud
