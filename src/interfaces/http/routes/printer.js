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
	 *  {
	 *    "code": 200,
	 *    "rawResponse": "",
	 *    "port": "/dev/tty.usbmodem1411"
	 *  }
	 */
	router.post('/:port/commands/:command', http.checkAuth.jwt, function (req, res) {
		client.drivers.runCommandTemplate(req.params.port, req.params.command, req.body, (err, response) => {
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
	 *  {
	 *    "code": 200,
	 *    "rawResponse": "",
	 *    "port": "/dev/tty.usbmodem1411"
	 *  }
	 */
	router.post('/:port/gcode', http.checkAuth.jwt, http.checkParams(['command']), function (req, res) {
		client.drivers.sendCommand(req.params.port, req.body.command, (err, response) => {
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
	 *  {
	 *    "code": 200,
	 *    "rawResponse": "",
	 *    "port": "/dev/tty.usbmodem1411"
	 *  }
	 */
	router.post('/:port/tune', http.checkAuth.jwt, http.checkParams(['command']), function (req, res) {
		client.drivers.sendTuneCommand(req.params.port, req.body.command, (err, response) => {
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
	router.post('/:port/print', http.checkAuth.jwt, http.checkParams(['file']), function (req, res) {
		client.drivers.printFile(req.params.port, req.body.file, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			else if (response.success === false && response.file) return res.notFound('File not found')
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
	 * @apiParam {String} pauseGcode A G-code sequence (separated with new lines) to execute after pausing the print.
	 */
	router.post('/:port/pause', http.checkAuth.jwt, function (req, res) {
		client.drivers.pausePrint(req.params.port, req.body.pauseGcode || null, (err, response) => {
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
	 * @apiParam {String} resumeGcode A G-code sequence (separated with new lines) to execute before resuming the print.
	 */
	router.post('/:port/resume', http.checkAuth.jwt, function (req, res) {
		client.drivers.resumePrint(req.params.port, req.body.resumeGcode || null, (err, response) => {
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
	 * @apiParam {String} stopGcode A G-code sequence (separated with new lines) to execute after stopping the print.
	 */
	router.post('/:port/stop', http.checkAuth.jwt, function (req, res) {
		client.drivers.stopPrint(req.params.port, req.body.stopGcode || null, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})
	
	/**
	 * @api {get} /api/printer/:port/logs Printer:logs
	 * @apiGroup Printer
	 * @apiDescription Get firmware communication logs for a printer
	 * @apiVersion: 2.1.0
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 * @apiParam {Number} skip The amount of log lines to skip (where 0 is the end of the log file, e.g. the most recent communication).
	 * @apiParam {Number} limit The maximum amount of log lines to get (to speed up endpoint, maximum limit allowed is 1000 lines).
	 */
	router.get('/:port/logs', function (req, res) {
		client.drivers.getCommunicationLogs(req.params.port, req.query.skip, req.query.limit, (err, response) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
			return res.ok(response)
		})
	})
	
  return router
}
