'use strict'

const semver = require('semver')
const jwt = require('../../../src/core/utils/jwt')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

module.exports = (client) => {
	
	describe('Update', () => {
		
		describe('GET /api/update/current', () => {
			
			it('should return the current version information', (done) => {
				chai.request(client.http.app).get('/api/update/current').end((err, res) => {
					expect(res.status).to.equal(200)
					expect(semver.valid(res.body.version)).to.not.equal(null)
					done()
				})
			})
			
		})
		
	})
	
}