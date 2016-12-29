'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const PRINTER_STATUS_INTERVAL = 2000
const assert = require('assert')

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

    // we ask for the printer status every 2 seconds and store it
    this._statusInterval = setInterval(function () {
      self._drivers.getPrinterInfo(self._port, function (err, status) {
        if (err) {
          return self._client.log(`[drivers] - Error getting printer info: - ${err.message}`)
        }

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
}

module.exports = Printer
