'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const VIRTUAL_PORT = '/dev/virt0'
const Printer = require('./printer')

class VirtualDriver {

  constructor (port) {
    this._printJob = null
    this._progress = 0
    this._status = 'offline'
  }

  getPrinterInfo (port, callback) {
    return callback(null, {
      port: port,
      type: 'VIRTUAL',
      status: this._status,
      progress: this._progress
    })
  }
}

class VirtualPrinter extends Printer {

  constructor (client) {
    const virtualDriver = new VirtualDriver(VIRTUAL_PORT)
    super(client, virtualDriver, VIRTUAL_PORT)
    this._type = 'VIRTUAL'
  }
}

module.exports = VirtualPrinter
