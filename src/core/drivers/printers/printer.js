/**
* @Author: chris
* @Date:   2016-12-18T02:07:08+01:00
* @Filename: printer.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T00:22:29+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const PRINTER_STATUS_INTERVAL = 2000
const assert = require('assert')
const Handlebars = require('handlebars')
const async = require('async')

class Printer {

  constructor (client, drivers, port) {
    assert(client, '[drivers] - No instance of `client` passed in Printer')
    assert(drivers, '[drivers] - No instance of `drivers` passed in Printer')
    assert(port, '[drivers] - No port passed in Printer')

    const self = this

    this._client = client
    this._port = port
    this._drivers = drivers
    this._status = null
    this._commands = {}

    // we ask for the printer status every 2 seconds and store it
    this._statusInterval = setInterval(function () {
      self._drivers.getPrinterInfo(self._port, function (err, status) {
        if (err) return self._client.logger.log(`Coult not get printer info: - ${err.message}`, 'warn')
        self._status = status
      })
    }, PRINTER_STATUS_INTERVAL)
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

  /**
   * Get the current progress of the printer
   * Returns 0 when not printing
   * @returns {number}
   */
  getProgress () {
    return this._status.progress
  }

  getPosition () {

  }

  getQueue () {

  }

  clearQueue () {

  }

  startPrintFromFile () {

  }

  startPrintFromQueueItem () {

  }

  pausePrint () {

  }

  resumePrint () {

  }

  stopPrint () {

  }

  stopStatusInterval () {
    clearInterval(this._statusInterval)
  }

  getCommands () {
    return this._commands
  }

  addCommand (name, commands) {
    this._commands[name] = commands
    return this._commands[name]
  }

  createCommand (command, parameters, callback) {
    if (this._commands.hasOwnProperty(command)) {
      let commandList = []
      for (let i in this._commands[command]) {
        const template = Handlebars.compile(this._commands[command][i])
        const gcode = template(parameters)
        commandList.push(gcode)
      }
      return callback(null, commandList)
    } else {
      return callback(new Error('This command is not implemented for this printer'))
    }
  }

  runCommand (command, parameters, callback) {
    const self = this
    this.createCommand(command, parameters, function (err, commandList) {
      if (err) return callback(err)
      // TODO: check if parallel works correctly with real drivers
      async.parallel(commandList.map(function (command) {
        return function (printerCallback) {
          self._drivers.sendGcode(command, self._port, printerCallback)
        }
      }), function (err, results) {
        if (err) return callback(err)
        return callback(null, results)
      })
    })
  }
}

module.exports = Printer
