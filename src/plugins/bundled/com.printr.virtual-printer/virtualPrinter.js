/**
* @Author: chris
* @Date:   2016-12-29T01:57:12+01:00
* @Filename: virtualPrinter.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T22:22:14+01:00
*/

'use strict'

const path = require('path')
const rootDir = path.dirname(require.main.filename)
const Printer = require(path.join(rootDir, 'src/core/drivers/printers/printer')) // TODO: make this easier
const VirtualDriver = require('./virtualDriver')

class VirtualPrinter extends Printer {

  constructor (client, port) {
    const virtualDriver = new VirtualDriver(port)
    super(client, virtualDriver, port)
    this._type = 'VIRTUAL'
    this._drivers = virtualDriver

    // register virtual printer commands
    this.addCommand('home', ['G28'])
    this.addCommand('home_x', ['G28 X'])
    this.addCommand('home_y', ['G28 Y'])
    this.addCommand('home_z', ['G28 Z'])
    this.addCommand('jog', ['G91', 'G21', 'G1 {{axis}} {{dist}}'])
    this.addCommand('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
    this.addCommand('retract', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E-{{dist}}'])
    this.addCommand('lcd_message', ['M117                     {{msg}}']) // spaces are on purpose!
    this.addCommand('temp_bed', ['M140 S{{temp}}'])
    this.addCommand('temp_extruder', ['T{{extnr}}', 'M104 S{{temp}}'])
    this.addCommand('power_on', ['M80'])
    this.addCommand('power_off', ['M81'])
    this.addCommand('stop_all', ['M112'])
    this.addCommand('reset', ['M999'])
    this.addCommand('fan_on', ['M106'])
    this.addCommand('fan_off', ['M107'])
    this.addCommand('gcode', ['{{gcode}}'])
  }

  setStatus (status) {
    return this._drivers.setStatus(status)
  }
}

module.exports = VirtualPrinter
