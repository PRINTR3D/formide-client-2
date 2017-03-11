'use strict'

const downloadGcodeFromCloud = require('../../../src/core/cloud/downloadGcodeFromCloud')
const expect = require('chai').expect
const GCODE_FILE = 'ZY8SzVDOoEHacqma4E9jbJi6qIbV1fZPRsVtVJNLPSxrP1okxE' // hardcoded G-code from cloud we know exists

module.exports = (client) => {
	
	describe('Cloud', () => {
		
		describe('Download G-code', () => {
			
			it('should download an existing G-code from Formide', (done) => {
				downloadGcodeFromCloud(client, {
					gcode: GCODE_FILE
				}, function (err, filename) {
					if (err) return done(err)
					expect(filename).to.equal(GCODE_FILE + '.gcode')
					done()
				})
			}).timeout(10000) // we wait max. 10 seconds to download the test G-code
			
		})
		
	})

}
