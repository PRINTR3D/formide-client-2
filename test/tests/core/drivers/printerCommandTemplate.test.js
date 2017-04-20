'use strict'

const assert = require('assert')
const should = require('chai').should()
const expect = require('chai').expect

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
		
		describe('Test template with optional parameters', () => {
			
			it('should generate the template with the correct default values', (done) => {
				printer.addCommandTemplate('extrude', ['T{{extnr}}', 'G91', 'G21', 'G1 F{{#if speed}}{{speed}}{{else}}300{{/if}} E{{dist}}'])
				printer.createCommandFromTemplate('extrude', {
					extnr: 0,
					dist: 100
				}, (err, commands) => {
					if (err) return done(err)
					expect(commands).to.be.a('array')
					expect(commands[3]).to.equal('G1 F300 E100')
					done()
				})
			})
			
			it('should generate the template with the correct override values', (done) => {
				printer.createCommandFromTemplate('extrude', {
					extnr: 0,
					dist: 100,
					speed: 500
				}, (err, commands) => {
					if (err) return done(err)
					expect(commands).to.be.a('array')
					expect(commands[3]).to.equal('G1 F500 E100')
					done()
				})
			})
			
		})
		
	})
  
}
