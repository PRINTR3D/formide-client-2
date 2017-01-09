/**
* @Author: chris
* @Date:   2017-01-07T21:51:31+01:00
* @Filename: virtualDriver.js
* @Last modified by:   chris
* @Last modified time: 2017-01-09T23:34:48+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

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

  setStatus (status) {
    this._status = status
    return true
  }

  sendGcode (gcode, port, callback) {
    setTimeout(function () {
      console.log(`sending gcode: ${gcode}`)
      return callback(null, 'OK')
    }, 200)
  }
}

module.exports = VirtualDriver
