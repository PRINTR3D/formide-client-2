'use strict'

const request = require('request')

/**
 * Get cloud queue
 * @param client
 * @param port
 * @returns {Promise}
 */
function getCloudQueue (client, port) {
	return new Promise((resolve, reject) => {
		request.get(`${client.config.cloud.URL}/db/queue?port=${encodeURIComponent(port)}`, {
			auth: {
				bearer: client.cloud.getDeviceToken()
			},
			strictSSL: false,
			json: true
		}, (err, response, body) => {
			if (err) return reject(err)
			if (response.statusCode !== 200) return reject(new Error(`Could not get code: ${body.message}`))
			return resolve(body)
		})
	})
}

module.exports = getCloudQueue
