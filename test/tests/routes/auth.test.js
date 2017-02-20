'use strict'

const jwt = require('../../../src/core/utils/jwt')
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
			
			it('should throw a 401 for an invalid user', (done) => {
				chai.request(client.http.app).post('/api/auth/login').send({
					username: 'admin@local',
					password: 'adminwrong'
				}).end((req, res) => {
					expect(res.status).to.equal(401)
					done()
				})
			})
			
			it('should throw a 400 when the username parameter is missing', (done) => {
				chai.request(client.http.app).post('/api/auth/login').send({
					password: 'admin'
				}).end((req, res) => {
					expect(res.status).to.equal(400)
					done()
				})
			})
		})
		
		describe('GET /api/auth/validate', () => {
			
			it('should validate a valid JWT token', (done) => {
				const user = client.auth.find('admin@local')
				const token = jwt.sign(user)
				
				chai.request(client.http.app).get('/api/auth/validate').set('Authorization', `Bearer ${token}`).end((req, res) => {
					expect(res.status).to.equal(200)
					expect(res.body.valid).to.equal(true)
					expect(res.body.user.id).to.equal(user.id)
					done()
				})
			})
			
		})
		
	})
	
}