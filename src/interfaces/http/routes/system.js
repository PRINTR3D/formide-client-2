/**
* @Author: chris
* @Date:   2016-12-18T00:07:15+01:00
* @Filename: system.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T17:38:51+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in system router')
  assert(client, '[http] - http not passed in system router')

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

  /**
   * @api {POST} /api/system/loglevel Change log level
   * @apiGroup System
   * @apiVersion 2.0.0
   * @apiDescription Change the log level so you can receive more or less logs via the socket log channels
   */
  router.post('/loglevel', http.checkAuth.admin, function (req, res) {
    if (!req.body.logLevel) return res.badRequest('logLevel is a required parameter')
    client.config.log.level = req.body.logLevel
    return res.ok({ message: 'Log level updated' })
  })

  /**
   * @api {GET} /api/system/plugins Plugin information
   * @apiGroup System
   * @apiVersion 2.0.0
   * @apiDescription Get a list of installed plugins and information about them
   */
  router.get('/plugins', function (req, res) {
    let response = {}
    const plugins = client.plugins.getPlugins()
    for (let i in plugins) {
      response[i] = client.plugins.getPlugin(i).getJSON()
    }
    return res.ok(response)
  })

  router.put('/plugins', function (req, res) {

  })

  router.post('/plugins/:pluginName/disable', function (req, res) {

  })

  router.post('/plugins/:pluginName/enable', function (req, res) {

  })

  router.post('/plugins/:pluginName/reload', function (req, res) {
    client.plugins.reloadPlugin(req.params.pluginName)
    return res.ok({ message: `Reloaded plugin ${req.params.pluginName}` })
  })

  router.delete('/plugins/:pluginName', function (req, res) {

  })

  return router
}
