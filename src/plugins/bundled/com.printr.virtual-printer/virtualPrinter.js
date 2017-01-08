/**
* @Author: chris
* @Date:   2016-12-29T01:57:12+01:00
* @Filename: virtualPrinter.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T11:57:39+01:00
*/

'use strict'

const Printer = global.Printer
const VirtualDriver = require('./virtualDriver')

class VirtualPrinter extends Printer {

  constructor (client, port) {
    const virtualDriver = new VirtualDriver(port)
    super(client, port, virtualDriver)
    this._type = 'VIRTUAL'

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

  setStatus (status) {
    return this._drivers.setStatus(status)
  }

  sendCommand (command, callback) {
    this._driver.sendGcode(command, this._port, callback)
  }
}

module.exports = VirtualPrinter
