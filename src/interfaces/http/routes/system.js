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
  router.post('/loglevel', http.checkAuth.jwt, http.checkParams(['level']), function (req, res) {
    if (req.body.level < 1 || req.body.level > 6) return res.badRequest('Level should be between 1 and 6')
    client.config.log.level = req.body.level
    return res.ok({ message: 'Log level updated' })
  })

  return router
}
