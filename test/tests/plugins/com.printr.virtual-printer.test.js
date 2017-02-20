'use strict'

const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

module.exports = (client) => {
	describe('Virtual Printer', () => {
		describe('GET /plugins/com.printr.virtual-printer/api/status', () => {
			
			it('should set the status of the virtual printer', (done) => {
				chai.request(client.http.app).get('/plugins/com.printr.virtual-printer/api/status').query({
					status: 'online'
				}).end((req, res) => {
					expect(res.status).to.equal(200)
					// TODO: check actual virtual printer status after 2 seconds
					done()
				})
			})
			
			it('should throw a 400 when the username parameter is missing', (done) => {
				chai.request(client.http.app).get('/plugins/com.printr.virtual-printer/api/status').send({}).end((req, res) => {
					expect(res.status).to.equal(400)
					done()
				})
			})
			
		})
	})
}