'use strict'

const fs = require('fs')
const logFileLocation = '/data/logs/daemon.log'

module.exports = function api (plugin, router) {
	
	/**
	 * @api {get} /plugins/com.printr.log-reader/api/logs Logs:download
	 * @apiGroup Plugin:logs
	 * @apiDescription Download the daemon.log file from The Element
	 * @apiVersion 2.0.0
	 * @apiUse user
	 */
	router.get('/logs', plugin._client.http.checkAuth.jwt, function (req, res) {
		const exists = fs.existsSync(logFileLocation)
		if (!exists) return res.notFound('Could not find log file')
		const readStream = fs.createReadStream(logFileLocation)
		return readStream.pipe(res)
	})
	
	return router
}
