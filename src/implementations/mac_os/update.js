'use strict'

const pkg = require('../../../package.json')

/**
 * Get current version
 * @param callback
 */
function getCurrentVersion () {
	return new Promise(function (resolve) {
		return resolve({
			version: pkg.version
		})
	})
}

module.exports = {
	getCurrentVersion
}
