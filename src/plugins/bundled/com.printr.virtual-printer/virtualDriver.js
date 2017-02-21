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
	
	/**
   * Simulate sending G-code
	 * @param gcode
	 * @param callback
	 */
  sendGcode (gcode, callback) {
    setTimeout(function () {
      console.log(`sending virtual gcode: ${gcode}`)
      return callback(null, 'OK')
    }, 200)
  }
	
	/**
   * Simulate pause command
	 * @param callback
	 */
	pausePrint (callback) {
    const self = this
	  setTimeout(function () {
	    if (self._status !== 'printing' && self.status !== 'heating') return callback(new Error('Printer is not able to pause'))
      console.log('pausing virtual printer')
      return callback(null, 'OK')
	  }, 200)
  }
}

module.exports = VirtualDriver
