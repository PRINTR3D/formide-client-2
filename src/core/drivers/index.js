/**
* @Author: chris
* @Date:   2016-12-18T17:08:09+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-10T00:17:50+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const MAX_ALLOWED_PRINTERS = 4
const debug = require('debug')('app:driver')
const assert = require('assert')
const FdmPrinter = require('./printers/fmdPrinter') // we ship an FDM printer spec by default
const Driver = require('./comm') // we ship FDM drivers by default
const PrinterNotConnectedError = require('./printerNotConnectedError')

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

    // TODO: Reset queue items
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
      this._client.events.emit('printer.connected', {
        port: newPrinter.getPort()
      })
    }
  }

  /**
   * Handler for when printer was disconnected
   * @param port
   */
  printerDisconnected (port) {
    // if printer was connected and printing, set queueItem back to `queued`
    if (this.printers[port] !== undefined) {
      this._client.db.QueueItem.setQueuedForPort(port, function (err) {
        if (err) {
          return this._client.logger.log(`Error updating queue: ${err.message}`, 'warn')
        }

        this._client.logger.log(`Printer ${port} disconnected`, 'info')
        this._client.events.emit('printer.disconnected', { port, message: `Printer disconnected from ${port}` })

        // clear status interval before removing printer from printer list
        this.printers[port].stopStatusInterval()

        // remove entry from printers list
        delete this.printers[port]
      })
    }
  }

  /**
   * Handler for when printer has come online
   * This happens after the drivers successfully communicate with the printer
   * @param port
   */
  printerOnline (port) {

  }

  /**
   * Handler for when printer has finished printing
   * @param port
   * @param queueItemId
   */
  printFinished (port, queueItemId) {

  }

  /**
   * Generic event handler for drivers
   * @param port
   * @param event
   */
  printerEvent (port, event) {

  }

  getPrinter (port, callback) {
    const printer = this.printers[port]
    if (!printer) return callback(new PrinterNotConnectedError(port))
    return callback(null, this.printers[port])
  }

  getPrinterSync (port) {
    const printer = this.printers[port]
    if (!printer) return new PrinterNotConnectedError(port)
    return printer
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
}

module.exports = Drivers
