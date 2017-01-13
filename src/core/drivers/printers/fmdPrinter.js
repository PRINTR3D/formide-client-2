/**
* @Author: chris
* @Date:   2016-12-18T17:07:53+01:00
* @Filename: fmdPrinter.js
* @Last modified by:   chris
* @Last modified time: 2017-01-10T23:13:15+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const Printer = require('./printer')

class FdmPrinter extends Printer {

  constructor (client, port, driver) {
    super(client, port, driver)
    this._type = 'FDM'

    // TODO: load correct drivers inside of printer class, not in main drivers file

    // register FDM printer commands
    this.addCommandTemplate('home', ['G28'])
    this.addCommandTemplate('jog', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
  }

  askStatus (callback) {
    this._driver.getPrinterInfo(this._port, function (err, status) {
      return callback(err, status)
    })
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

  sendCommand (command, callback) {
    this._driver.sendGcode(command, this._port, callback)
  }

  sendTuneCommand (command, callback) {
    this._driver.sendTuneGcode(command, this._port, function (err, response) {
      if (callback) return callback(err, response)
    })
  }
}

module.exports = FdmPrinter
