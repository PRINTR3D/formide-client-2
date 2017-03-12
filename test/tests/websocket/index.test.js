'use strict'

const chai = require('chai')
const expect = chai.expect
const jwt = require('../../../src/core/utils/jwt')
const io = require('socket.io-client')

module.exports = (client) => {
	describe('WebSockets', () => {
		describe('Authenticate', () => {
			
			it('should authenticate when using a correct JWT token', (done) => {
				const user = client.auth.find('admin@local')
				const token = jwt.sign(user)
				const socketClient = io.connect(`http://localhost:${client.config.http.api}`)
				
				socketClient.emit('authenticate', {
					accessToken: token
				}, (data) => {
					expect(data.success).to.equal(true)
					expect(data.user.id).to.equal(user.id)
					socketClient.disconnect()
					done()
				})
			})
			
			it('should not authenticate when using an incorrect JWT', (done) => {
				const socketClient = io.connect(`http://localhost:${client.config.http.api}`)
				
				socketClient.emit('authenticate', {
					accessToken: 'wrongtoken'
				}, (data) => {
					expect(data.success).to.equal(false)
					socketClient.disconnect()
					done()
				})
			})
			
		})
	})
}
