'use strict'

class VirtualDriver {

  constructor (port) {
	  this._status = {
    	progress: 0,
		  status: 'online',
		  port: port,
		  queueItemId: 0,
		  filePath: '',
		  baudrate: 250000,
		  startTime: null
	  }
	  
	  // simulate connection time
	  // setTimeout(function () {
	  // 	this._status.status = 'online'
	  // }.bind(this), 6000)
  }
  
  setPrinter (printer) {
  	this._printer = printer
  }

  getStatus (callback) {
    return callback(null, {
      port: this._status.port,
      status: this._status.status,
      progress: this._status.progress,
	    filePath: this._status.filePath,
	    queueItemId: this._status.queueItemId,
	    baudrate: this._status.baudrate,
	    currentTime: new Date(),
	    startTime: this._status.startTime,
	    type: 'VIRTUAL',
	    bed: {
      	temp: 0,
		    targetTemp: 0
	    },
	    extruders: [
		    {
		    	temp: 0,
			    targetTemp: 0
		    }
	    ]
    })
  }
	
	/**
	 * Change status using plugin test UI
	 * @param status
	 * @returns {boolean}
	 */
  setStatus (status) {
  	for (var i in status) {
  		this._status[i] = status[i]
	  }
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
	    if (self._status.status !== 'online') return callback(new Error('Printer could not execute gcode command'))
	    return callback(null, {
      	code: 200,
	      rawResponse: 'OK',
	      msg: 'command sent'
      })
    }, 200)
  }
	
	/**
	 * Simulate tune g-code sending
	 * @param gcode
	 * @param callback
	 */
	sendTuneGcode(gcode, callback) {
		setTimeout(function () {
			console.log(`sending virtual tune gcode: ${gcode}`)
			if (self._status.status !== 'printing' && self._status.status !== 'heating' && self._status.status !== 'paused') return callback(new Error('Printer could not execute tune gcode command'))
			return callback(null, {
				code: 200,
				rawResponse: 'OK',
				msg: 'tune command sent'
			})
		}, 200)
	}
	
	/**
	 * Simulate printing file
	 * @param filePath
	 * @param queueItemId
	 * @param callback
	 * @returns {*}
	 */
	printFile (filePath, queueItemId, callback) {
  	this._status.status = 'printing'
		this._status.progress = 50
		this._status.queueItemId = queueItemId
		this._status.filePath = filePath
		this._status.currentPrintStartTime = new Date()
		
		// simulate 5 seconds of printing time
		// setTimeout(function () {
		// 	this._status.status = 'printing'
		// 	this._status.progress = 50
		// }.bind(this), 5000)
		
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
	    if (self._status.status !== 'printing' && self._status.status !== 'heating') return callback(new Error('Printer could not be paused'))
		  return callback(null, {
	      code: 200,
	      rawResponse: 'OK',
	      msg: 'printer pausing'
      })
	  }, 200)
  }
	
	/**
	 * Simulate resuming printer
	 * @param callback
	 */
	resumePrint (callback) {
	  const self = this
	  setTimeout(function () {
		  if (self._status.status !== 'paused') return callback(new Error('Printer could not be resumed'))
		  return callback(null, {
			  code: 200,
			  rawResponse: 'OK',
			  msg: 'printer resuming'
		  })
	  }, 200)
  }
	
	/**
	 * Simulate stopping printer
	 * @param callback
	 */
	stopPrint (callback) {
		const self = this
	  setTimeout(function () {
	  	if (self._status.status !== 'printing' && self._status.status !== 'paused' && self._status.status !== 'heating') return callback(new Error('Printer could not be stopped'))
		  self.resetStatus()
		  return callback(null, {
		  	code: 200,
			  rawResponse: 'OK',
			  message: 'printer stopping'
		  })
	  }, 1000)
  }
	
	/**
	 * Handle print finished
	 * @param queueItemId
	 * @param callback
	 */
  printFinished (queueItemId, callback) {
  	this.resetStatus()
		return callback(null, {
			code: 200,
			rawResponse: 'OK',
			message: 'printer stopping'
		})
  }
  
  resetStatus () {
	  this._status.status = 'online'
	  this._status.progress = 0
	  this._status.startTime = null
	  this._status.queueItemId = 0
  }
}

module.exports = VirtualDriver
