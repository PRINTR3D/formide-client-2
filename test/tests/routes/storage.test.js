'use strict'

const fs = require('fs')
const jwt = require('../../../src/core/utils/jwt')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

module.exports = (client) => {
	
	describe('Storage', () => {
		
		describe('POST /api/storage', () => {
			
			it('should upload a .gcode file', (done) => {
				chai.request(client.http.app)
				.post('/api/storage')
				.attach('file', fs.readFileSync(__dirname + '/../../resources/3DBenchy.gcode'), '3DBenchy.gcode')
				.end((err, res) => {
					expect(res.status).to.equal(200)
					expect(res.body.success).to.equal(true)
					done()
				})
			})
			
			it('should not upload a non .gcode file', (done) => {
				chai.request(client.http.app)
				.post('/api/storage')
				.attach('file', fs.readFileSync(__dirname + '/../../resources/cube40mm.stl'), 'cube40mm.stl')
				.end((err, res) => {
					expect(res.status).to.equal(400)
					done()
				})
			})
			
		})
		
	})
	
}