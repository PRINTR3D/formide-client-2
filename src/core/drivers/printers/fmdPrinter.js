/**
* @Author: chris
* @Date:   2016-12-18T17:07:53+01:00
* @Filename: fmdPrinter.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T21:26:41+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const Printer = require('./printer')

class FdmPrinter extends Printer {

  constructor (client, drivers, port) {
    super(client, drivers, port)
    this._type = 'FDM'

    // register FDM printer commands
    this.addCommand('home', ['G28'])
    this.addCommand('jog', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
  }

  /**
   * Get the type of printer
   * @returns {string}
   */
  getType () {
    return this._type
  }

  /**
   * Returns the amount of extruders the printer contains a status for
   * @returns {Number}
   */
  getExtruderCount () {
    return this._status.extruders.length
  }

  getExtruderTemperature (extruderNumber) {
    return this._status.extruders[extruderNumber].temperature
  }

  getBedTemperature () {
    return this._status.bed.temperature
  }

  sendGcode (command, callback) {
    this._driver.sendGcode(command, this._port, function (err, response) {
      if (callback) return callback(err, response)
    })
  }

  sendTuneGcode (command, callback) {
    this._driver.sendTuneGcode(command, this._port, function (err, response) {
      if (callback) return callback(err, response)
    })
  }
}

module.exports = FdmPrinter
