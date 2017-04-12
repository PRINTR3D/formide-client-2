'use strict'

const assert = require('assert')
const co = require('co')
const socket = require('./socket')
const proxy = require('./proxy')
const downloadGcodeFromCloud = require('./downloadGcodeFromCloud')
const generateCloudCode = require('./generateCloudCode')
const getCloudQueue = require('./getCloudQueue')
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
    // assert(client.db, '[cloud] - client.db not passed')
    assert(client.logger.log, '[cloud] - client.logger.log not passed')

    this._client = client
	  this._deviceToken = false

    // set URLs
    this.URL = client.config.cloud.URL
    this.platformURL = client.config.cloud.platformURL

    // socket connections
    this.cloud = socket.cloud(client, client.config.cloud.URL)

    // prevent .bind waterfall
    const self = this

    // forward all events to cloud
    client.events.onAny(function (eventName, eventData) {
      self.cloud.emit(eventName, eventData)
    })

    // socket events
    this.cloud.on('ping', function (data) {
      self.cloud.emit('pong', data)
    })

    // on connect
    this.cloud.on('connect', function () {
	      co(function*() {
		      const publicIP = yield client.system.network.publicIp()
		      const internalIP = yield client.system.network.ip()
		      const macAddress = yield client.system.network.mac()
		
		      // log MAC address for debugging
		      client.logger.log(`Using MAC address ${macAddress}`, 'info')
		
		      // emit authentication data
		      self.cloud.emit('authenticate', {
			      type: 'client',
			      ip: publicIP,
			      ip_internal: internalIP,
			      mac: macAddress,
			      version: client.version,
			      environment: process.env.NODE_ENV,
			      port: client.config.http.port
		      }, function (response) {
			      if (response.success && response.deviceToken) {
				      self._deviceToken = response.deviceToken
				      client.logger.log(`Cloud connected with token ${response.deviceToken}`, 'info')
			      } else {
				      client.logger.log(`Cloud not connected: ${response.message}`, 'warn')
				      self.cloud.disconnect()
			      }
		      })
	      }).then(null, console.error)
    })

    // HTTP proxy calls are handled by the proxy function
    this.cloud.on('http', function (data) {
      client.logger.log(`Cloud HTTP call: ${data.url}`, 'debug')
      proxy(client, data, function (err, response) {
      	  if (err) return self.cloud.emit('http', getCallbackData(data._callbackId, err, {}))
        self.cloud.emit('http', getCallbackData(data._callbackId, null, response.body))
      })
    })

    // Adding a G-code file from the cloud
    this.cloud.on('printQueueItem', function (data) {
	    downloadGcodeFromCloud(self._client, data.gcode, function (err, stats) {
		    self._client.drivers.printQueueItem(data.port, stats.path, data.queueItemId, (err, response) => {
		    	  if (err) return self.cloud.emit('printQueueItem', getCallbackData(data._callbackId, err, {}))
			    self.cloud.emit('printQueueItem', getCallbackData(data._callbackId, null, response))
		    })
      })
    })

    // on disconnect try reconnecting when server did not ban client
    this.cloud.on('disconnect', function () {
	    client.logger.log('Cloud disconnected, trying to reconnect...', 'warning')
	    setTimeout(() => {
	    	  if (self.cloud.connected === false) {
	    	  	  self.cloud.connect() // re-connect
		    } else {
	    	  	  self.cloud.disconnect() // trigger another disconnect event
		    }
	    }, 5000)
    })
  }

  getDeviceToken () {
    return this._deviceToken
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

	/**
   * Get cloud queue for a connected printer by port
	 * @param port
	 * @returns {Promise}
	 */
  getCloudQueue (port) {
	  const self = this
    return new Promise((resolve, reject) => {
	    getCloudQueue(self._client, port).then((response) => {
	      return resolve(response)
      }).catch(reject)
    })
  }
	
	/**
	 * Print a G-code from the cloud queue
	 * @param gcode
	 * @param port
	 * @param queueItemId
	 * @returns {Promise}
	 */
	printGcodeFromCloud (queueItemId, gcode, port) {
  	  const self = this
		return new Promise((resolve, reject) => {
			downloadGcodeFromCloud(self._client, gcode, function (err, stats) {
				if (err) return reject(err)
				self._client.drivers.printQueueItem(port, stats.path, queueItemId, (err, response) => {
					if (err) return reject(err)
					return resolve(response)
				})
			})
		})
	}
}

module.exports = Cloud
