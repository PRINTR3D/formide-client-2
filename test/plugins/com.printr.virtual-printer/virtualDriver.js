'use strict'

class VirtualDriver {

  constructor (port) {
    this._progress = 0
    this._status = 'offline'
    this._port = port
	  this._queueItemId = 0
	  this._filePath = ''
  }
  
  setPrinter (printer) {
  	this._printer = printer
  }

  getStatus (callback) {
    return callback(null, {
      port: this._port,
      status: this._status,
      progress: this._progress,
	    filePath: this._filePath,
	    queueItemId: this._queueItemId,
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
      return callback(null, {
      	code: 200,
	      rawResponse: 'OK',
	      msg: 'command sent'
      })
    }, 200)
  }
	
	printFile (filePath, queueItemId, port, callback) {
  	this._status = 'printing'
		this._progress = 50
		this._queueItemId = queueItemId
		this._filePath = filePath
		return callback(null, {
			code: 200,
			rawResponse: 'OK',
			msg: 'printer started'
		})
	}
	
	/**
   * Simulate pause command
	 * @param callback
	 */
	pausePrint (callback) {
    const self = this
	  setTimeout(function () {
	    if (self._status !== 'printing' && self.status !== 'heating') return callback(new Error('Printer could not be paused'))
      
		  return callback(null, {
	      code: 200,
	      rawResponse: 'OK',
	      msg: 'printer pausing'
      })
	  }, 200)
  }
  
  stopPrint (callback) {
		const self = this
	  setTimeout(function () {
	  	if (self._status !== 'printing' && self.status !== 'paused' && self.status !== 'heating') return callback(new Error('Printer could not be stopped'))
		  
		  return callback(null, {
		  	code: 200,
			  rawResponse: 'OK',
			  message: 'printer stopping'
		  }, 1000)
	  })
  }
}

module.exports = VirtualDriver
