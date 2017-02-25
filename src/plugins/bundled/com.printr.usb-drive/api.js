'use strict'

module.exports = function api (plugin, router) {
	
	/**
	 * @api {get} /plugins/com.printr.usb-drive/api/drives USB:drives
	 * @apiGroup Plugin:USB
	 * @apiDescription List attached USB drives
	 * @apiVersion 2.0.0
	 */
	router.get('/drives', function (req, res) {
		plugin.getDrives().then(res.ok).catch(res.serverError)
	})
	
	/**
	 * @api {post} /plugins/com.printr.usb-drive/api/drives/:drive/mount USB:mount
	 * @apiGroup Plugin:USB
	 * @apiDescription Mount a USB drive to read it
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 */
	router.post('/drives/:drive/mount', plugin._client.http.checkAuth.jwt, function (req, res) {
		plugin.mountDrive(req.params.drive).then(res.ok).catch(res.serverError)
	})
	
	/**
	 * @api {post} /plugins/com.printr.usb-drive/api/drives/:drive/unmount USB:unmount
	 * @apiGroup Plugin:USB
	 * @apiDescription Unmount a USB drive after using it
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 */
	router.post('/drives/:drive/unmount', plugin._client.http.checkAuth.jwt, function (req, res) {
		plugin.unmountDrive(req.params.drive).then(res.ok).catch(res.serverError)
	})
	
	/**
	 * @api {get} /plugins/com.printr.usb-drive/api/drives/:drive/read USB:read
	 * @apiGroup Plugin:USB
	 * @apiDescription Read files on the USB drive in a path relative to the drive's root
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} path Relative path for which to list files
	 */
	router.get('/drives/:drive/read', plugin._client.http.checkParams(['path'], 'query'), function (req, res) {
		plugin.readDrive(req.params.drive, req.query.path).then(res.ok).catch(res.serverError)
	})
	
	/**
	 * @api {post} /plugins/com.printr.usb-drive/drives/:drive/copy USB:copy
	 * @apiGroup Plugin:USB
	 * @apiDescription Copy a file from USB drive to local storage
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} path Relative path for which file to copy to local storage
	 */
	router.post('/drives/:drive/copy', plugin._client.http.checkAuth.jwt, plugin._client.http.checkParams(['path'], 'query'), function (req, res) {
		plugin.copyFile(req.params.drive, req.query.path).then(res.ok).catch((err) => {
			if (err.name === 'storageFull') {
				return res.insufficientStorage(err.message)
			} else if (err.name === 'invalidFiletype') {
				return res.badRequest(err.message)
			} else {
				return res.serverError(err)
			}
		})
	})
	
	return router
}
