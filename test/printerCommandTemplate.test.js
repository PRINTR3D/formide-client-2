'use strict'

const assert = require('assert')
const should = require('should')

// test setup
const client = require('../app')
const Printer = require('../src/core/drivers/printers/printer')
const printer = new Printer(client, '/dev/null')

describe('printer command template', function () {
  
  describe('add command template', function () {
    
    it('should add the template to the printer instance', function (done) {
      printer.addCommandTemplate('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
      const commandTemplates = printer.getCommandTemplates()
      should(commandTemplates).have.property('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
      done()
    })
    
  })
  
})
