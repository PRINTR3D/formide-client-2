'use strict'

const pkg = require('../../../package.json')

/**
 * Get current version from Element update config
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
