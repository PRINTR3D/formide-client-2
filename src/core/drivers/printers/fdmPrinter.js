'use strict'

const Printer = require('./printer')

const defaultPauseSequence = 'M401\nG91\nG1 E-2 Z10\nG90\nG1 X1 Y1\n'
const defaultResumeSequence = 'G90\nG1 F6000 X5 Y5\nM402\n'
const defaultStopSequence = 'G92 E0\nG28 X\nM104 S0\nM104 S0 T0\nM104 S0 T1\n M140 S0\nM84'

class FdmPrinter extends Printer {

  constructor (client, port, driver) {
    super(client, port, driver)
    this._type = 'FDM'

    // register FDM printer commands
	  this.addCommandTemplate('home', ['G28'])
	  this.addCommandTemplate('home_x', ['G28 X'])
	  this.addCommandTemplate('home_y', ['G28 Y'])
	  this.addCommandTemplate('home_z', ['G28 Z'])
	  this.addCommandTemplate('jog', ['G91', 'G21', 'G1 F{{#if speed}}{{speed}}{{else}}2500{{/if}} {{axis}}{{dist}}'])
	  this.addCommandTemplate('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F{{#if speed}}{{speed}}{{else}}300{{/if}} E{{dist}}'])
	  this.addCommandTemplate('retract', ['T{{extnr}}', 'G91', 'G21', 'G1 F{{#if speed}}{{speed}}{{else}}300{{/if}} E-{{dist}}'])
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
    this._driver.getPrinterInfo(this._port, function (err, status) {
	    status.path = encodeURIComponent(status.port) // add the encoded port path for easy of use
	    status.queueItemId = self._queueItemId // use the client string variable instead of the driver integer for the HTTP API
      status.filePath = self._currentlyPrinting // add the path of the file that's being printed
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
    this._driver.printFile(filePath, 0, this._port, function (err, response) {
      if (err) return callback(err)
      self._currentlyPrinting = filePath
      self._queueItemId = ''
      return callback(null, response)
    })
  }

	printQueueItem (filePath, queueItemId, callback) {
		const self = this
		this._driver.printFile(filePath, queueItemId, this._port, function (err, response) {
			if (err) return callback(err)
			self._currentlyPrinting = filePath
			self._queueItemId = queueItemId
			return callback(null, response)
		})
	}

  pausePrint (pauseSequence, callback) {
	  this._driver.pausePrint(this._port, pauseSequence || defaultPauseSequence, (err, response) => {
		  if (err) return callback(err)
		  return callback(null, response)
	  })
  }

  resumePrint (resumeSequence, callback) {
    this._driver.resumePrint(this._port, resumeSequence || defaultResumeSequence, (err, response) => {
	    if (err) return callback(err)
	    return callback(null, response)
    })
  }

  stopPrint (stopSequence, callback) {
  	const self = this
	  this._driver.stopPrint(this._port, stopSequence || defaultStopSequence, (err, response) => {
		  if (err) return callback(err)
		  self._currentlyPrinting = ''
		  self._queueItemId = ''
		  return callback(null, response)
	  })
  }

	// reset currently printing and queue item ID
	printFinished (printjobID, callback) {
		const self = this
		self._currentlyPrinting = ''
		self._queueItemId = ''
		return callback(null)
  }
}

module.exports = FdmPrinter
