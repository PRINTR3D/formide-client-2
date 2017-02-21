'use strict'

const assert = require('assert')
const should = require('chai').should()

module.exports = (client) => {
  
	describe('Printer command templates', () => {
		
		// test setup
		const Printer = require('../../../../src/core/drivers/printers/printer')
		const printer = new Printer(client, '/dev/null')
		
		describe('Add template', () => {
			
			it('should add the template to the printer instance', (done) => {
				printer.addCommandTemplate('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
				const commandTemplates = printer.getCommandTemplates()
				commandTemplates.should.have.property('extrude').to.deep.equal(['T{{extnr}}', 'G91', 'G21', 'G1 F300 E{{dist}}'])
				done()
			})
			
		})
		
	})
  
}
