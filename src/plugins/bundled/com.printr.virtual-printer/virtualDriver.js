'use strict'

class VirtualDriver {

  constructor (port) {
    this._printJob = null
    this._progress = 0
    this._status = 'offline'
  }

  getStatus (port, callback) {
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
