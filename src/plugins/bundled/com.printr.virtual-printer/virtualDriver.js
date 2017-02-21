'use strict'

class VirtualDriver {

  constructor (port) {
    this._progress = 0
    this._status = 'offline'
    this._port = port
  }

  getStatus (callback) {
    return callback(null, {
      port: this._port,
      status: this._status,
      progress: this._progress,
	    type: 'VIRTUAL',
      device: 'local'
    })
  }

  setStatus (status) {
    this._status = status
    return true
  }

  sendGcode (gcode, callback) {
    setTimeout(function () {
      console.log(`sending gcode: ${gcode}`)
      return callback(null, 'OK')
    }, 200)
  }
}

module.exports = VirtualDriver
