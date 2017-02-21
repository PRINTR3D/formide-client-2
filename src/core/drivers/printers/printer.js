'use strict'

const PRINTER_STATUS_INTERVAL = 2000
const assert = require('assert')
const Handlebars = require('handlebars')
const async = require('async')

class Printer {

  constructor (client, port, driver) {
    assert(client, '[drivers] - No instance of `client` passed in Printer')
    assert(port, '[drivers] - No port passed in Printer')

    const self = this

    this._client = client
    this._port = port
    this._driver = driver || client.drivers.getDefaultDrivers()
    this._status = null
    this._commandTemplates = {}
    this._currentlyPrinting = false

    // we ask for the printer status every 2 seconds and store it
    this._statusInterval = setInterval(function () {
      // TODO: fix this
      self.askStatus(function (err, status) {
        if (err) return self._client.logger.log(`Could not get printer info: - ${err.message}`, 'warning')
        self._status = status
        self._client.events.emit('printer.status', status)
      })
    }, PRINTER_STATUS_INTERVAL)
  }
	
	/**
	 * Return printer type
	 * @returns {string|string|string|string|string}
	 */
	getType () {
  	return this._type
  }

  /**
   * Get the port to which this printer is connected
   * @returns {*}
   */
  getPort () {
    return this._port
  }

  /**
   * Return the last printer status from the drivers
   * @returns {null|*}
   */
  getStatus () {
    return this._status
  }

  stopStatusInterval () {
    clearInterval(this._statusInterval)
  }

  getCommandTemplates () {
    return this._commandTemplates
  }

  addCommandTemplate (name, commands) {
    this._commandTemplates[name] = commands
    return this._commandTemplates[name]
  }

  createCommandFromTemplate (command, parameters, callback) {
    if (this._commandTemplates.hasOwnProperty(command)) {
      let commandList = []
      for (let i in this._commandTemplates[command]) {
        const template = Handlebars.compile(this._commandTemplates[command][i])
        const gcode = template(parameters)
        commandList.push(gcode)
      }
      return callback(null, commandList)
    } else {
      return callback(new Error('This command is not implemented for this printer'))
    }
  }

  runCommandTemplate (command, parameters, callback) {
    const self = this
    this.createCommandFromTemplate(command, parameters, function (err, commandList) {
      if (err) return callback(err)
      // TODO: check if parallel works correctly with real drivers
      async.parallel(commandList.map(function (command) {
        return function (printerCallback) {
          self.sendCommand(command, printerCallback)
        }
      }), function (err, results) {
        if (err) return callback(err)
        return callback(null, results)
      })
    })
  }
	
	askStatus (callback) {
		this._client.logger.log(`Printer.askStatus not implemented for this printer`, 'critical')
	}
	
	sendCommand () {
		this._client.logger.log(`Printer.sendCommand not implemented for this printer`, 'critical')
	}
	
	sendTuneCommand () {
		this._client.logger.log(`Printer.sendTuneCommand not implemented for this printer`, 'critical')
	}
	
	printFile () {
		this._client.logger.log(`Printer.printFile not implemented for this printer`, 'critical')
	}
	
	pausePrint (callback) {
		this._client.logger.log(`Printer.pausePrint not implemented for this printer`, 'critical')
	}
	
	resumePrint (callback) {
		this._client.logger.log(`Printer.resumePrint not implemented for this printer`, 'critical')
	}
	
	stopPrint (callback) {
		this._client.logger.log(`Printer.stopPrint not implemented for this printer`, 'critical')
	}
	
	printFinished () {
		this._client.logger.log(`Printer.printFinished not implemented for this printer`, 'critical')
	}
}

module.exports = Printer
