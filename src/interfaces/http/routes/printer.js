/**
* @Author: chris
* @Date:   2016-12-18T00:07:29+01:00
* @Filename: printer.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T01:28:24+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in printer router')
  assert(http, '[http] - http not passed in printer router')

  /**
   * @api {GET} /api/printer Get status of all connected printers
   * @apiGroup Printer
   * @apiVersion 1.0.0
   * @apiDescription Get the status of all printers that are currently connected to the device.
   * @apiSuccessExample {json} 200 success
   *  [
   *    {
   *      "port": "/dev/virt0",
   *      "type": "VIRTUAL",
   *      "status": "offline",
   *      "progress": 0
   *    }
   *  ]
   */
  router.get('/', function (req, res) {
    client.drivers.getStatus(function (err, status) {
      if (err) return res.serverError(err)
      return res.ok(status)
    })
  })

  /**
   * @api {GET} /api/printer/:port Get status of printer on selected port
   * @apiGroup Printer
   * @apiVersion 1.0.0
   * @apiDescription Get the status of the printer that's connected to the port given in the URI parameter
   * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
   * @apiSuccessExample {json} 200 success
   *  {
   *    "port": "/dev/virt0",
   *    "type": "VIRTUAL",
   *    "status": "offline",
   *    "progress": 0
   *  }
   */
  router.get('/:port', function (req, res) {
    client.drivers.getStatusByPort(req.params.port, function (err, status) {
      if (err && err.name === 'PrinterNotConnectedError') return res.notFound(err.message)
      else if (err) return res.serverError(err)
      return res.ok(status)
    })
  })

  router.get('/:port/commands', function (req, res) {
    client.drivers.getPrinter(req.params.port, function (err, printer) {
      if (err && err.name === 'PrinterNotConnectedError') return res.notFound(err.message)
      else if (err) return res.serverError(err)
      return res.ok(printer.getCommandTemplates())
    })
  })

  router.get('/:port/commands/:command/mock', function (req, res) {
    client.drivers.getPrinter(req.params.port, function (err, printer) {
      if (err && err.name === 'PrinterNotConnectedError') return res.notFound(err.message)
      else if (err) return res.serverError(err)
      printer.createCommandTemplate(req.params.command, req.query, function (err, command) {
        if (err) return res.serverError(err)
        return res.ok(command)
      })
    })
  })

  router.get('/:port/commands/:command', function (req, res) {
    client.drivers.getPrinter(req.params.port, function (err, printer) {
      if (err && err.name === 'PrinterNotConnectedError') return res.notFound(err.message)
      else if (err) return res.serverError(err)
      printer.runCommandTemplate(req.params.command, req.query, function (err, response) {
        if (err) return res.serverError(err)
        return res.ok(response)
      })
    })
  })

  return router
}
