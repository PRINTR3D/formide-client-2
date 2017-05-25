'use strict'

const request = require('request')

/**
 * Get cloud queue
 * @param {Client} client
 * @param {String} port
 * @returns {Promise}
 */
function getCloudQueue (client, port) {
	return new Promise((resolve, reject) => {
		request.get(`${client.config.cloud.URL}/db/queue/device/port/${encodeURIComponent(port)}`, {
			auth: {
				bearer: client.cloud.getDeviceToken()
			},
			strictSSL: false,
			json: true
		}, (err, response) => {
			if (err && err.code === 'ECONNREFUSED') return reject(new Error('Could not connect to server'))
			if (err) return reject(err)
			return resolve(response)
		})
	})
}

/**
 * Remove cloud queue item as device
 * @param {Client} client
 * @param {String} queueItemId
 * @returns {Promise}
 */
function removeQueueItem (client, queueItemId) {
	return new Promise((resolve, reject) => {
		request.delete(`${client.config.cloud.URL}/db/queue/device/${queueItemId}`, {
			auth: {
				bearer: client.cloud.getDeviceToken()
			},
			strictSSL: false,
			json: true
		}, (err, response) => {
			if (err && err.code === 'ECONNREFUSED') return reject(new Error('Could not connect to server'))
			if (err) return reject(err)
			return resolve(response)
		})
	})
}

module.exports = {
	getCloudQueue,
	removeQueueItem
}
