'use strict'

const expect = require('chai').expect
const co = require('co')

module.exports = (client) => {
	
	describe('Auth', () => {
		
		it('should authorize a valid username and password', (done) => {
			co(function*() {
				yield client.auth.createUser('test', 'password')
				const user = yield client.auth.authenticate('test', 'password')
				expect(user.username).to.equal('test')
				expect(user.id).to.not.equal(undefined)
				yield client.auth.resetUsers()
				done()
			}).then(null, done)
		})
		
		it('should not authorize an invalid username', (done) => {
			co(function*() {
				yield client.auth.createUser('test', 'password')
				const user = yield client.auth.authenticate('test2', 'password')
				expect(user).to.equal(false)
				yield client.auth.resetUsers()
				done()
			}).then(null, done)
		})
		
		it('should not authorize an invalid password', (done) => {
			co(function*() {
				yield client.auth.createUser('test', 'password')
				const user = yield client.auth.authenticate('test', 'wrongpassword')
				expect(user).to.equal(false)
				yield client.auth.resetUsers()
				done()
			}).then(null, done)
		})
		
	})
	
}