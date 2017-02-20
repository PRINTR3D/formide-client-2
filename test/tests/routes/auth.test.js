'use strict'

const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

module.exports = (client) => {
	describe('Auth', () => {
		describe('POST /api/auth/login', () => {
			it('should generate a JWT token for a valid user', (done) => {
				chai.request(client.http.app).post('/api/auth/login').send({
					username: 'admin@local',
					password: 'admin'
				}).end((req, res) => {
					expect(res.status).to.equal(200)
					expect(res.body.success).to.equal(true)
					done()
				})
			})
		})
	})
}