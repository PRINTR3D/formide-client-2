'use strict'

module.exports = function api (plugin, router) {
	
	/**
	 * @api {get} /plugins/com.printr.usb-drive/api/drives USB:drives
	 * @apiGroup Plugin:USB
	 * @apiDescription List attached USB drives
	 * @apiVersion 2.0.0
	 */
	router.get('/drives', function (req, res) {
		plugin.getDrives().then((drives) => {
			return res.ok(drives)
		}).catch(res.serverError)
	})
	
	/**
	 * @api {post} /plugins/com.printr.usb-drive/api/drives/:drive/mount USB:mount
	 * @apiGroup Plugin:USB
	 * @apiDescription Mount a USB drive to read it
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 */
	router.post('/drives/:drive/mount', plugin._client.http.checkAuth.jwt, function (req, res) {
		
	})
	
	
}
