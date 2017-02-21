'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in printer router')
  assert(http, '[http] - http not passed in printer router')

  /**
   * @api {GET} /api/printer Printer:list
   * @apiGroup Printer
   * @apiDescription Get the status of all printers that are currently connected to the device.
   * @apiVersion 1.0.0
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
   * @api {get} /api/printer/:port Printer:status
   * @apiGroup Printer
   * @apiDescription Get the status of the printer that's connected to the port given in the URI parameter
   * @apiVersion 1.0.0
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

  /**
   * @api {get} /api/printer/:port/commands Printer:commands
   * @apiGroup Printer
   * @apiDescription Get a list of available commands for the printer on the selected port
   * @apiVersion 1.0.0
   * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
   */
  router.get('/:port/commands', function (req, res) {
    client.drivers.getPrinter(req.params.port, function (err, printer) {
      if (err && err.name === 'PrinterNotConnectedError') return res.notFound(err.message)
      else if (err) return res.serverError(err)
      return res.ok(printer.getCommandTemplates())
    })
  })
	
	/**
	 * @api {get} /api/printer/:port/commands/:command Printer:commands(run)
	 * @apiGroup Printer
	 * @apiDescription Run a printer command
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 * @apiParam {String} command The command to run.
	 */
	router.get('/:port/commands/:command', http.checkAuth.jwt, function (req, res) {
		client.drivers.getPrinter(req.params.port, function (err, printer) {
			if (err && err.name === 'PrinterNotConnectedError') return res.notFound(err.message)
			else if (err) return res.serverError(err)
			printer.runCommandTemplate(req.params.command, req.query, function (err, response) {
				if (err) return res.serverError(err)
				return res.ok(response)
			})
		})
	})

  /**
   * @api {get} /api/printer/:port/commands/:command/mock Printer:commands(mock)
   * @apiGroup Printer
   * @apiDescription Mock a printer command to check the resulting G-code
   * @apiVersion 2.0.0
   * @apiHeader {String} Authentication Valid Bearer JWT token
   * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
   * @apiParam {String} command The command to mock.
   */
  router.get('/:port/commands/:command/mock', function (req, res) {
    client.drivers.getPrinter(req.params.port, function (err, printer) {
      if (err && err.name === 'PrinterNotConnectedError') return res.notFound(err.message)
      else if (err) return res.serverError(err)
      printer.createCommandFromTemplate(req.params.command, req.query, function (err, command) {
        if (err) return res.serverError(err)
        return res.ok(command)
      })
    })
  })

  return router
}
