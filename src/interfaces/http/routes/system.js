'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in system router')
  assert(client, '[http] - http not passed in system router')

  /**
   * @api {GET} /api/system/info System:info
   * @apiGroup System
   * @apiDescription Get general system information like versions, OS and uptime
   * @apiVersion 2.0.0
   */
  router.get('/info', function (req, res) {
    const driverVersion = client.drivers.getVersion()
    const uptime = process.uptime()

    return res.ok({
      version: client.config.version,
      drivers: driverVersion,
      uptime
    })
  })

  /**
   * @api {POST} /api/system/logs System:logs(level)
   * @apiGroup System
   * @apiVersion 2.0.0
   * @apiDescription Change the log level so you can receive more or less logs via the socket log channels
   * @apiHeader {String} Authentication Valid Bearer JWT token
   * @apiParam {String} level Level to set the logging to
   */
  router.post('/logs/level', http.checkAuth.jwt, http.checkParams(['level']), function (req, res) {
    if (req.body.level < 1 || req.body.level > 6) return res.badRequest('Level should be between 1 and 6')
    client.config.log.level = req.body.level
    return res.ok({ message: 'Log level updated' })
  })
  
  /**
   * @api {get} /api/system/cloud/code System:cloud(code)
   * @apiGroup System
   * @apiDescription Get a cloud connection code to use in the redirect to Formide
   * @apiVersion 2.0.0
   */
  router.get('/cloud/code', function (req, res) {
    client.cloud.generateCode().then((cloudCode) => {
      return res.ok({
        code: cloudCode,
	      redirectURI: `${client.config.cloud.platformURL}/#/?cloud_code=${cloudCode}`
      })
    }).catch(res.serverError)
  })

  return router
}
