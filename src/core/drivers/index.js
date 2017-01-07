/**
* @Author: chris
* @Date:   2016-12-18T17:08:09+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T16:04:29+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const MAX_ALLOWED_PRINTERS = 4
const assert = require('assert')
const FdmPrinter = require('./printers/fmdPrinter')
const VirtualPrinter = require('./printers/virtualPrinter')
const Driver = require('./comm')
const PrinterNotConnectedError = require('./printerNotConnectedError')

class Drivers {

  /**
   * @constructor
   * @param client - Instance of Client
   */
  constructor (client) {
    assert(client.log, 'client.log is not found in passed instance of client')

    this._client = client
    const self = this

    try {
      this._version = require('formide-drivers/package.json').version
      this.drivers = new Driver(client)
      this.drivers.on(function (err, event) {
        if (err) {
          client.log(err.message, 'error')
          console.log(err)
        }

        if (event) {
          if (event.type === 'printerConnected') {
            self.printerConnected(event.port)
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
      client.log(`Cannot load drivers binary, try re-installing formide-drivers: ${e.message}`, 'error')
    }

    // all connected printers will be stored in this named array
    this.printers = {}

    // add a virtual printer for testing
    const virtualPrinter = new VirtualPrinter(this._client)
    this.printers[virtualPrinter.getPort()] = virtualPrinter

    // TODO: GPIO
    // TODO: Reset queue items
  }

  /**
   * Return the version of drivers binary installed
   */
  getVersion () {
    return this._version
  }

  /**
   * Handler for when printer was connected
   * @param port
   * @param data
   */
  printerConnected (port, data) {
    if (Object.keys(this.printers).length >= MAX_ALLOWED_PRINTERS) {
      return this._client.events.emit('notification', {
        level: 'warning',
        title: 'Maximum printers allowed reached',
        body: `You have already connected ${MAX_ALLOWED_PRINTERS} to this device, you cannot add another one.`
      })
    }

    // TODO: figure out how to select correct printer type, for now only FDM supported
    this.printers[port] = new FdmPrinter(this._client, this.drivers, port)
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
          return this._client.log(`Error updating queue: ${err.message}`, 'warn')
        }

        this._client.log(`Printer ${port} disconnected`, 'info')
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
