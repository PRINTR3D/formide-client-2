'use strict'

const request = require('request')

/**
 * Notify the API that a queue item finished printing
 * @param client
 * @param queueItemId (or printJobId)
 * @returns {Promise}
 */
function postQueueItemFinished (client, queueItemId) {
	return new Promise((resolve, reject) => {
		request.put(`${client.config.cloud.URL}/db/queue/${queueItemId}/finished`, {
			auth: {
				bearer: client.cloud.getDeviceToken()
			},
			strictSSL: false,
			json: true
		}, (err, response, body) => {
			if (err && err.code === 'ECONNREFUSED') return reject(new Error('Could not connect to server'))
			if (err) return reject(err)
			return resolve(body)
		})
	})
}

module.exports = postQueueItemFinished
