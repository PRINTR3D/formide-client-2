/**
* @Author: chris
* @Date:   2016-12-18T00:07:15+01:00
* @Filename: system.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:35:16+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

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
