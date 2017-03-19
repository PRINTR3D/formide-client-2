'use strict'

const request = require('request')

/**
 * Get a cloud connection code from the API
 * @param client
 * @param macAddress
 * @returns {Promise}
 */
function generateCloudCode (client, macAddress) {
	return new Promise((resolve, reject) => {
		request.get(`${client.config.cloud.URL}/devices/register/code?mac_address=${macAddress}`, {
			auth: {
				bearer: client.cloud.getDeviceToken()
			},
			strictSSL: false,
			json: true
		}, (err, response, body) => {
			if (err && err.code === 'ECONNREFUSED') return reject(new Error('Could not connect to server'))
			if (err) return reject(err)
			if (response.statusCode !== 200) return reject(new Error(`Could not get code: ${body.message}`))
			if (!body.code) return reject(new Error(`Could not get code: ${body.message}`))
			return resolve(body.code)
		})
	})
}

module.exports = generateCloudCode
