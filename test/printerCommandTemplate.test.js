/**
* @Author: chris
* @Date:   2017-01-08T01:32:08+01:00
* @Filename: printerCommandTemplate.test.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T01:59:58+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

const assert = require('assert')
const should = require('should')

// test setup
const client = require('../app').client
const Printer = require('../src/core/drivers/printers/printer')
const printer = new Printer(client, {}, '/dev/null')

global.describe('printer command template', function () {
  global.describe('add command template', function () {
    global.it('should add the template to the printer instance', function (done) {
      printer.addCommandTemplate('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
      const commandTemplates = printer.getCommandTemplates()
      should(commandTemplates).have.property('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
      done()
    })
  })
})
