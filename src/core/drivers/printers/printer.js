/**
* @Author: chris
* @Date:   2016-12-18T02:07:08+01:00
* @Filename: printer.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T01:29:07+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const PRINTER_STATUS_INTERVAL = 2000
const assert = require('assert')
const Handlebars = require('handlebars')
const async = require('async')

class Printer {

  constructor (client, driver, port) {
    assert(client, '[drivers] - No instance of `client` passed in Printer')
    assert(driver, '[drivers] - No instance of `driver` passed in Printer')
    assert(port, '[drivers] - No port passed in Printer')

    const self = this

    this._client = client
    this._port = port
    this._driver = driver
    this._status = null
    this._commandTemplates = {}

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
}

module.exports = Printer
