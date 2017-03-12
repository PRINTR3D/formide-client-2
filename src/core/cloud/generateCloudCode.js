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
			strictSSL: false
		}, (err, response, body) => {
			if (err) return reject(err)
			try {
				body = JSON.parse(body)
				if (response.statusCode !== 200) return reject(new Error(`Could not get code: ${body.message}`))
				if (!body.code) return reject(new Error(`Could not get code: ${body.message}`))
				return resolve(body.code)
			} catch (e) {
				return reject(e)
			}
		})
	})
}

module.exports = generateCloudCode
