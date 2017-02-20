'use strict'

const chai = require('chai')
const expect = chai.expect
const jwt = require('../../../src/core/utils/jwt')
const io = require('socket.io-client')

module.exports = (client) => {
	describe('Auth', () => {
		describe('POST /api/auth/login', () => {
			
			it('should authenticate using a correct JWT token', (done) => {
				const user = client.auth.find('admin@local')
				const token = jwt.sign(user)
				const socketClient = io.connect(`http://localhost:${client.config.http.api}`)
				
				socketClient.emit('authenticate', {
					token: token
				}, (data) => {
					expect(data.success).to.equal(true)
					expect(data.user.id).to.equal(user.id)
					done()
				})
			})
			
		})
	})
}