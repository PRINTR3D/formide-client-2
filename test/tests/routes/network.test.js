'use strict'

const jwt = require('../../../src/core/utils/jwt')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

module.exports = (client) => {
	
	describe('Network', () => {
		
		describe('GET /api/network/status', () => {
			
			it('should return the network status', (done) => {
				chai.request(client.http.app).get('/api/network/status').end((req, res) => {
					expect(res.status).to.equal(200)
					expect(res.body.isConnected).to.equal(true)
					done()
				})
			})
			
		})
		
		describe('GET /api/network/list', () => {
			
			it('should return a list of nearby networks', (done) => {
				chai.request(client.http.app).get('/api/network/list').end((req, res) => {
					expect(res.status).to.equal(200)
					done()
				})
			}).timeout(5000)
			
		})
		
	})
	
}