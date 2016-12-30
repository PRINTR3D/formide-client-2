/**
* @Author: chris
* @Date:   2016-12-18T17:07:53+01:00
* @Filename: fmdPrinter.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:33:52+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const Printer = require('./printer')

class FdmPrinter extends Printer {

  constructor (client, drivers, port) {
    super(client, drivers, port)
    this._type = 'FDM'
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

  }

  getBedTemperature () {

  }

  sendGcode () {

  }

  sendTuneGcode () {

  }
}

module.exports = FdmPrinter
