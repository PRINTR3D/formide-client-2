'use strict'

const Printer = require('./printer')

class FdmPrinter extends Printer {

  constructor (client, port, driver) {
    super(client, port, driver)
    this._type = 'FDM'

    // register FDM printer commands
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
    this._driver.getPrinterInfo(this._port, function (err, status) {
      return callback(err, status)
    })
  }
  
  sendCommand (command, callback) {
    return this.sendGcode(command, callback)
  }

  sendGcode (gcode, callback) {
    this._driver.sendGcode(gcode, this._port, callback)
  }
  
  sendTuneCommand (tuneCommand, callback) {
  	return this.sendTuneGcode(tuneCommand, callback)
  }

  sendTuneGcode (tuneGcode, callback) {
    this._driver.sendTuneGcode(tuneGcode, this._port, callback)
  }
	
	printFile (filePath, callback) {
    const self = this
    this._driver.printFile(filePath, this._port, function (err, response) {
      if (err) return callback(err)
      self._currentlyPrinting = filePath
      return callback(null, response)
    })
  }
  
  pausePrint (callback) {
	  this._driver.pausePrint(this._port, (err, response) => {
		  if (err) return callback(err)
		  return callback(null, response)
	  })
  }
  
  resumePrint (callback) {
    this._driver.resumePrint(this._port, (err, response) => {
	    if (err) return callback(err)
	    return callback(null, response)
    })
  }
  
  stopPrint (callback) {
  	const self = this
    // TODO: 2nd parameter is stop G-code sequence
	  this._driver.stopPrint(this._port, '', (err, response) => {
		  if (err) return callback(err)
		  self._currentlyPrinting = false
		  return callback(null, response)
	  })
  }
	
	printFinished (printjobID, callback) {
  	// remove G-code file from storage and unset status
		this._client.storage.remove(this._currentlyPrinting).then(() => {
			this._currentlyPrinting = false
			return callback()
		}).catch(callback)
  }
}

module.exports = FdmPrinter
