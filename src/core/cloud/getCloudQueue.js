'use strict'

const request = require('request')

/**
 * Get cloud queue
 * @param client
 * @param port
 * @returns {Promise}
 */
function getCloudQueue (client, port) {
	console.log('getCloudQueue: client.cloud.getDeviceToken()', client.cloud.getDeviceToken())
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

module.exports = getCloudQueue
