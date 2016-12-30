/**
* @Author: chris
* @Date:   2016-12-29T01:57:12+01:00
* @Filename: virtualPrinter.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:34:00+01:00
*/

'use strict'

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
