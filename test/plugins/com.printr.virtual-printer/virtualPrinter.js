'use strict'

const VirtualDriver = require('./virtualDriver')

class VirtualPrinter extends Printer {

  constructor (client, port) {
    const virtualDriver = new VirtualDriver(port)
    super(client, port, virtualDriver)
    this._type = 'VIRTUAL'
    
    virtualDriver.setPrinter(this)

    // register virtual printer commands
    this.addCommandTemplate('home', ['G28'])
    this.addCommandTemplate('home_x', ['G28 X'])
    this.addCommandTemplate('home_y', ['G28 Y'])
    this.addCommandTemplate('home_z', ['G28 Z'])
    this.addCommandTemplate('jog', ['G91', 'G21', 'G1 {{axis}} {{dist}}'])
    this.addCommandTemplate('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
    this.addCommandTemplate('retract', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E-{{dist}}'])
    this.addCommandTemplate('lcd_message', ['M117                     {{msg}}']) // spaces are on purpose!
    this.addCommandTemplate('temp_bed', ['M140 S{{temp}}'])
    this.addCommandTemplate('temp_extruder', ['T{{extnr}}', 'M104 S{{temp}}'])
    this.addCommandTemplate('power_on', ['M80'])
    this.addCommandTemplate('power_off', ['M81'])
    this.addCommandTemplate('stop_all', ['M112'])
    this.addCommandTemplate('reset', ['M999'])
    this.addCommandTemplate('fan_on', ['M106'])
    this.addCommandTemplate('fan_off', ['M107'])
    this.addCommandTemplate('gcode', ['{{gcode}}'])
  }
	
	askStatus (callback) {
		const self = this
		this._driver.getStatus(function (err, status) {
			if (err) return callback(err)
			status.path = encodeURIComponent(status.port) // add the encoded port path for easy of use
			status.queueItemId = self._queueItemId // use the client string variable instead of the driver integer for the HTTP API
			return callback(null, status)
		})
  }

  setStatus (status) {
    return this._driver.setStatus(status)
  }

  sendCommand (command, callback) {
    this._driver.sendGcode(command, callback)
  }
  
  sendGcode (command, callback) {
	  this._driver.sendGcode(command, callback)
  }
  
  sendTuneCommand(command, callback) {
	  this._driver.sendTuneGcode(command, callback)
  }
  
  sendTuneGcode(command, callback) {
	  this._driver.sendTuneGcode(command, callback)
  }
  
  pausePrint (callback) {
    this._driver.pausePrint(callback)
  }
	
	resumePrint (callback) {
		this._driver.resumePrint(callback)
	}
  
  stopPrint (callback) {
  	this._driver.stopPrint(callback)
  }
  
  printFile (filePath, callback) {
	  const self = this
	  this._driver.printFile(filePath, 0, function (err, response) {
		  if (err) return callback(err)
		  self._currentlyPrinting = filePath
		  self._queueItemId = ''
		  return callback(null, response)
	  })
  }
	
	printQueueItem (filePath, queueItemId, callback) {
		const self = this
		this._driver.printFile(filePath, queueItemId, function (err, response) {
			if (err) return callback(err)
			self._currentlyPrinting = filePath
			self._queueItemId = queueItemId
			return callback(null, response)
		})
	}
	
	printFinished (queueItemId, callback) {
  	this._driver.printFinished(queueItemId, callback)
	}
}

module.exports = VirtualPrinter
