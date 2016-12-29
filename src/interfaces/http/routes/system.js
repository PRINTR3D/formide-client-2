'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client) {
  assert(client, '[http] - client not passed in system router')

  /**
   * @api {GET} /api/system/info System information
   * @apiGroup System
   * @apiDescription Get general system information like versions, OS and uptime
   * @apiVersion 2.0.0
   */
  router.get('/info', function (req, res) {
    const driverVersion = client.drivers.getVersion()
    const slicerVersion = client.slicer.getVersion()
    const uptime = process.uptime()

    return res.ok({
      versions: {
        driver: driverVersion,
        slicer: slicerVersion
      },
      uptime
    })
  })

  return router
}
