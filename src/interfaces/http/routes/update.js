'use strict'

const router = require('express').Router()

module.exports = function (client, http) {
  
  /**
   * @api {get} /api/update/status Update:status
   * @apiGroup Update
   * @apiDescription Get status of last executed OTA update
   * @apiVersion 2.0.0
   */
  router.get('/status', function (req, res) {
    if (!client.system.update) return res.notImplemented('Updates are not available on this system')
	  if (!client.system.update.getUpdateStatus) return res.notImplemented('Updates are not available on this system')
    client.system.update.getUpdateStatus().then(res.ok).catch(res.serverError)
  })

  /**
   * @api {get} /api/update/current Update:current
   * @apiGroup Update
   * @apiDescription Get current version information
   * @apiVersion 2.0.0
   */
  router.get('/current', function (req, res) {
	  if (!client.system.update) return res.notImplemented('Updates are not available on this system')
	  if (!client.system.update.getCurrentVersion) return res.notImplemented('Updates are not available on this system')
    client.system.update.getCurrentVersion().then((currentVersion) => {
	    return res.ok({
        version: currentVersion.version,
        details: currentVersion
      })
    }).catch(res.serverError)
  })

  /**
   * @api {get} /api/update/check Update:check
   * @apiGroup Update
   * @apiDescription Check if an update is available for this system
   * @apiVersion 2.0.0
   */
  router.get('/check', function (req, res) {
    if (!client.system.update) return res.notImplemented('Updates are not available on this system')
	  if (!client.system.update.checkForUpdate) return res.notImplemented('Updates are not available on this system')
	  client.system.update.checkForUpdate().then(res.ok).catch(res.serverError)
  })

  /**
   * @api {post} /api/update/do Update:do
   * @apiGroup Update
   * @apiDescription Execute the update that was found in /check
   * @apiVersion 2.0.0
   * @apiHeader {String} Authentication Valid Bearer JWT token
   */
  router.post('/do', http.checkAuth.jwt, function (req, res) {
    if (!client.system.update) return res.notImplemented('Updates are not available on this system')
	  if (!client.system.update.update) return res.notImplemented('Updates are not available on this system')
    client.system.update.update(res.ok).catch(res.serverError)
  })

  return router
}
