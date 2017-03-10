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
      if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
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
      if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
      else if (err) return res.serverError(err)
      return res.ok(printer.getCommandTemplates())
    })
  })
	
	/**
	 * @api {post} /api/printer/:port/commands/:command Printer:commands(run)
	 * @apiGroup Printer
	 * @apiDescription Run a printer command
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 * @apiParam {String} command The command to run.
	 * @apiSuccessExample {json} 200 success
	 *  'OK'
	 */
	router.post('/:port/commands/:command', http.checkAuth.jwt, function (req, res) {
		client.drivers.runCommandTemplate(req.params.port, req.params.command, req.query, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})

  /**
   * @api {get} /api/printer/:port/commands/:command/mock Printer:commands(mock)
   * @apiGroup Printer
   * @apiDescription Mock a printer command to check the resulting G-code
   * @apiVersion 2.0.0
   * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
   * @apiParam {String} command The command to mock.
   */
  router.get('/:port/commands/:command/mock', function (req, res) {
  	client.drivers.createCommandFromTemplate(req.params.port, req.params.command, req.query, (err, command) => {
		  if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
		  else if (err) return res.serverError(err)
		  return res.ok(command)
	  })
  })
	
	/**
	 * @api {post} /api/printer/:port/gcode Printer:gcode
	 * @apiGroup Printer
	 * @apiDescription Send a G-code command to the printer
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 * @apiParam {String} command G-code to send
	 * @apiSuccessExample {json} 200 success
	 *  'OK'
	 */
	router.post('/:port/gcode', http.checkAuth.jwt, http.checkParams(['command'], 'query'), function (req, res) {
		client.drivers.sendCommand(req.params.port, req.query.command, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})
	
	/**
	 * @api {post} /api/printer/:port/tune Printer:tune
	 * @apiGroup Printer
	 * @apiDescription Send a tune G-code command to the printer while it's printing
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 * @apiParam {String} command Tune G-code to send
	 * @apiSuccessExample {json} 200 success
	 *  'OK'
	 */
	router.post('/:port/tune', http.checkAuth.jwt, http.checkParams(['command'], 'query'), function (req, res) {
		client.drivers.sendTuneCommand(req.params.port, req.query.command, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})
	
	/**
	 * @api {post} /api/printer/:port/print Printer:print
	 * @apiGroup Printer
	 * @apiDescription Start a print by file path
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 * @apiParam {String} file Path to the file to print (absolute)
	 */
	router.post('/:port/print', http.checkAuth.jwt, http.checkParams(['file'], 'query'), function (req, res) {
		client.drivers.printFile(req.params.port, req.query.file, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})
	
	/**
	 * @api {post} /api/printer/:port/pause Printer:pause
	 * @apiGroup Printer
	 * @apiDescription Pause the printer
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 */
	router.post('/:port/pause', http.checkAuth.jwt, function (req, res) {
		client.drivers.pausePrint(req.params.port, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})
	
	/**
	 * @api {post} /api/printer/:port/resume Printer:resume
	 * @apiGroup Printer
	 * @apiDescription Resume the printer
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 */
	router.post('/:port/resume', http.checkAuth.jwt, function (req, res) {
		client.drivers.resumePrint(req.params.port, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})
	
	/**
	 * @api {post} /api/printer/:port/stop Printer:stop
	 * @apiGroup Printer
	 * @apiDescription Stop the printer
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 */
	router.post('/:port/stop', http.checkAuth.jwt, function (req, res) {
		client.drivers.stopPrint(req.params.port, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})
	
  return router
}
