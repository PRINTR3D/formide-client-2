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
      versions: {
        client: client.config.version,
        driver: driverVersion
      },
      uptime
    })
  })

  /**
   * @api {POST} /api/system/loglevel System:loglevel
   * @apiGroup System
   * @apiVersion 2.0.0
   * @apiDescription Change the log level so you can receive more or less logs via the socket log channels
   */
  router.post('/loglevel', http.checkAuth.jwt, function (req, res) {
    if (!req.body.logLevel) return res.badRequest('logLevel is a required parameter')
    client.config.log.level = req.body.logLevel
    return res.ok({ message: 'Log level updated' })
  })

  return router
}
