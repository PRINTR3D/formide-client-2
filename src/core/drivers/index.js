'use strict'

const MAX_ALLOWED_PRINTERS = 4
const debug = require('debug')('app:driver')
const fs = require('fs')
const path = require('path')
const assert = require('assert')
const FdmPrinter = require('./printers/fmdPrinter') // we ship an FDM printer spec by default
const Driver = require('./comm') // we ship FDM drivers by default
const PrinterNotConnectedError = require('./printerNotConnectedError')

const PRINTER_EVENTS = {
  ONLINE: 'printer.online',
	STARTED: 'printer.started',
  PAUSED: 'printer.paused',
  RESUMED: 'printer.resumed',
  STOPPED: 'printer.stopped',
  FINISHED: 'printer.finished',
  CONNECTED: 'printer.connected',
  DISCONNECTED: 'printer.disconnected'
}

class Drivers {

  /**
   * @constructor
   * @param client - Instance of Client
   */
  constructor (client) {
    assert(client.logger.log, 'client.logger.log is not found in passed instance of client')

    this._client = client
    const self = this

    try {
      debug('forking drivers...')
      this._version = require('formide-drivers/package.json').version
      this._drivers = new Driver(client)
      debug('drivers loaded')

      this._drivers.on(function (err, event) {
        if (err) {
          client.logger.log(err.message, 'error')
          console.log(err)
        }

        if (event) {
          if (event.type === 'printerConnected') {
            const newPrinter = new FdmPrinter(self._client, event.port)
            self.printerConnected(newPrinter)
          } else if (event.type === 'printerDisconnected') {
            self.printerDisconnected(event.port)
          } else if (event.type === 'printerOnline') {
            self.printerOnline(event.port)
          } else if (event.type === 'printFinished' || event.type === 'printerFinished') {
            self.printFinished(event.port, event.printjobID)
          } else if (event.type === 'printerInfo') {
            self.printerEvent('info', event)
          } else if (event.type === 'printerWarning') {
            self.printerEvent('warning', event)
          } else if (event.type === 'printerError') {
            self.printerEvent('error', event)
          }
        }
      })
    } catch (e) {
      client.logger.log(`Cannot load drivers binary, try re-installing formide-drivers: ${e.message}`, 'error')
    }

    // all connected printers will be stored in this named array
    this.printers = {}
  }

  /**
   * Return the version of drivers binary installed
   */
  getVersion () {
    return this._version
  }

  getDefaultDrivers () {
    return this._drivers
  }

  /**
   * Handler for when printer was connected
   * @param port
   * @param data
   */
  printerConnected (newPrinter) {
    if (Object.keys(this.printers).length >= MAX_ALLOWED_PRINTERS) {
      return this._client.events.emit('notification', {
        level: 'warning',
        title: 'Maximum printers allowed reached',
        body: `You have already connected ${MAX_ALLOWED_PRINTERS} to this device, you cannot add another one.`
      })
    } else {
      this.printers[newPrinter.getPort()] = newPrinter
      this._client.logger.log(`New printer connected on port ${newPrinter.getPort()}`, 'info')
      this._client.events.emit(PRINTER_EVENTS.CONNECTED, {
        port: newPrinter.getPort()
      })
    }
  }

  /**
   * Handler for when printer was disconnected
   * @param port
   */
  printerDisconnected (port) {
    if (this.printers[port] !== undefined) {
	    this._client.logger.log(`Printer ${port} disconnected`, 'info')
	    this._client.events.emit(PRINTER_EVENTS.DISCONNECTED, { port, message: `Printer disconnected from ${port}` })

	    // clear status interval before removing object from array of printers
	    this.printers[port].stopStatusInterval()

	    // remove entry from printers list
	    delete this.printers[port]
    }
  }

  /**
   * Handler for when printer has come online
   * This happens after the drivers successfully communicate with the printer
   * @param port
   */
  printerOnline (port) {
	  this._client.logger.log(`Printer online on port ${port}`)
	  this._client.events.emit(PRINTER_EVENTS.ONLINE, {port})
  }

  /**
   * Generic event handler for drivers
   * @param port
   * @param event
   */
  printerEvent (level, event) {
    this._client.events.emit(`printer.${level}`, event)
  }

	/**
   * Get a printer by port
	 * @param port
	 * @param callback
	 * @returns {*}
	 */
  getPrinter (port, callback) {
    const printer = this.printers[port]
    if (!printer) return callback(new PrinterNotConnectedError(port))
    return callback(null, this.printers[port])
  }

  /**
   * Get status of all connected printers
   * @param callback
   */
  getStatus (callback) {
    const self = this
    return callback(null, Object.keys(this.printers).map(function (port) {
      return self.printers[port].getStatus()
    }))
  }

  /**
   * Get status of single printer by port
   * @param port
   * @param callback
   * @returns {*}
   */
  getStatusByPort (port, callback) {
    const printer = this.printers[port]
    if (!printer) return callback(new PrinterNotConnectedError(port))
    return callback(null, this.printers[port].getStatus())
  }

	/**
   * Print G-code file
	 * @param port
	 * @param filename
	 * @param callback
	 * @returns {PrinterNotConnectedError}
	 */
  printFile (port, filePath, callback) {
	  const self = this
	  const printer = this.printers[port]
		if (!printer) return callback(new PrinterNotConnectedError(port))

		// check if file exists
		if (!fs.existsSync(filePath)) {
			return callback(null, {
				success: false,
				file: filePath
			})
		}

    printer.printFile(filePath, (err, response) => {
	    if (err) return callback(err)

      // emit event
	    self._client.events.emit(PRINTER_EVENTS.STARTED, {
		    port: port,
		    filePath: filePath,
        queueItemId: false,
        message: `Printer on port ${port} started printing ${filePath}`
	    })

	    return callback(null, {
	    	printerResponse: response,
		    success: true,
		    port: port
	    })
    })
  }

  printQueueItem (port, filePath, queueItemId, callback) {
  	assert(port, 'port not passed')
	  assert(filePath, 'filePath not passed')
	  assert(queueItemId, 'queueItemId not passed')

	  const self = this
	  const printer = this.printers[port]
	  if (!printer) return callback(new PrinterNotConnectedError(port))

	  // check if file exists
	  if (!fs.existsSync(filePath)) {
		  return callback(null, {
			  success: false,
			  file: filePath
		  })
	  }

	  printer.printQueueItem(filePath, queueItemId, (err, response) => {
		  if (err) return callback(err)

      // emit event
		  self._client.events.emit(PRINTER_EVENTS.STARTED, {
			  port: port,
			  filePath: filePath,
        queueItemId: queueItemId,
			  message: `Printer on port ${port} started printing ${filePath}`
		  })

		  return callback(null, {
			  printerResponse: response,
			  success: true,
			  port: port,
        queueItemId: queueItemId
		  })
	  })
  }

	/**
   * Pause printer
	 * @param port
	 * @param callback
	 * @returns {PrinterNotConnectedError}
	 */
  pausePrint (port, callback) {
    const self = this
	  const printer = this.printers[port]
		if (!printer) return callback(new PrinterNotConnectedError(port))

    printer.pausePrint((err, response) => {
      if (err) return callback (err)

      // emit event
	    self._client.events.emit(PRINTER_EVENTS.PAUSED, {
	      port: port
      })

      return callback(null, {
	      printerResponse: response,
	      success: true,
	      port: port
      })
    })
  }

	/**
   * Resume printer
	 * @param port
	 * @param callback
	 * @returns {PrinterNotConnectedError}
	 */
  resumePrint (port, callback) {
	  const self = this
	  const printer = this.printers[port]
		if (!printer) return callback(new PrinterNotConnectedError(port))

    printer.resumePrint((err, response) => {
	    if (err) return callback (err)

      // emit event
	    self._client.events.emit(PRINTER_EVENTS.RESUMED, {
		    port: port
	    })

	    return callback(null, {
		    printerResponse: response,
		    success: true,
		    port: port
	    })
    })
  }

	/**
   * Stop printer
	 * @param port
	 * @param callback
	 * @returns {PrinterNotConnectedError}
	 */
  stopPrint (port, callback) {
	  const self = this
	  const printer = this.printers[port]
		if (!printer) return callback(new PrinterNotConnectedError(port))

		printer.stopPrint((err, response) => {
			if (err) return callback (err)

      // emit event
			self._client.events.emit(PRINTER_EVENTS.STOPPED, {
				port: port
			})

			return callback(null, {
				printerResponse: response,
				success: true,
				port: port
			})
		})
  }

	/**
	 * Handler for when printer has finished printing
	 * @param port
	 * @param queueItemId
	 */
	printFinished (port, printJobId) {
    const self = this
		const printer = this.printers[port]
		if (!printer) return this._client.log(new PrinterNotConnectedError(port).message, 'error')
		
		// get correct queue item ID from printer instance
		const queueItemId = printer.getQueueItemId()

    // notify cloud API when finished print was a cloud queue item
    if (queueItemId && queueItemId !== '') {
	    self._client.cloud.postQueueItemFinished(queueItemId).then((response) => {
        console.log(`cloud queue finished response for ${queueItemId}`, response)
      }).catch((err) => {
        self._client.log(err, 'error')
		
		    // emit event
		    self._client.events.emit(PRINTER_EVENTS.FINISHED, {
			    port,
			    queueItemId
		    })
      })
    } else {
	    // emit event
	    self._client.events.emit(PRINTER_EVENTS.FINISHED, {
		    port,
		    queueItemId
	    })
    }

    // let printer implementation know print was finished (might not be used)
		printer.printFinished(printJobId, (err) => {
      if (err) self._client.log(err, 'error')
		})
	}

	/**
   * Send G-code command template, sends resulting G-code to printer (while idle)
	 * @param port
	 * @param data
	 * @param callback
	 * @returns {PrinterNotConnectedError}
	 */
	runCommandTemplate (port, command, parameters, callback) {
	  const printer = this.printers[port]
		if (!printer) return callback(new PrinterNotConnectedError(port))

    printer.runCommandTemplate(command, parameters, (err, response) => {
	    if (err) return callback (err)
	    return callback(null, {
		    printerResponse: response,
		    success: true,
		    port: port
	    })
    })
  }

	/**
   * Create a comment from template, returns G-code that would be executed
	 * @param port
	 * @param command
	 * @param parameters
	 * @param callback
	 * @returns {*}
	 */
	createCommandFromTemplate (port, command, parameters, callback) {
		const printer = this.printers[port]
		if (!printer) return callback(new PrinterNotConnectedError(port))

		printer.createCommandFromTemplate(command, parameters, (err, command) => {
			if (err) return callback (err)
			return callback(null, command)
		})
  }

	/**
   * Send custom G-code (while idle)
	 * @param port
	 * @param gcode
	 * @param callback
	 * @returns {PrinterNotConnectedError}
	 */
  sendCommand (port, gcode, callback) {
	  const printer = this.printers[port]
		if (!printer) return callback(new PrinterNotConnectedError(port))

		printer.sendCommand(gcode, (err, response) => {
			if (err) return callback (err)
			return callback(null, {
				printerResponse: response,
				success: true,
				port: port
			})
		})
  }

	/**
   * Send tune G-code (while printing)
	 * @param port
	 * @param tuneGcode
	 * @param callback
	 * @returns {PrinterNotConnectedError}
	 */
  sendTuneCommand (port, tuneGcode, callback) {
	  const printer = this.printers[port]
		if (!printer) return callback(new PrinterNotConnectedError(port))

		printer.sendTuneCommand(tuneGcode, (err, response) => {
			if (err) return callback (err)
			return callback(null, {
				printerResponse: response,
				success: true,
				port: port
			})
		})
  }
}

module.exports = Drivers
