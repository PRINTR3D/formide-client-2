'use strict'

const expect = require('chai').expect
const getMac = require('getmac')
let mac = null

module.exports = (client) => {
	
	before((done) => {
		getMac.getMac(function (err, macAddress) {
			if (err) return done(err)
			mac = macAddress
			return done()
		})
	})
	
	describe('Cloud', () => {
		
		describe('Connection', () => {
			
			it('should connect when the MAC address is registered', (done) => {
				
				const io = require('socket.io').listen(1338)
				
				io.on('connection', (socket) => {
					socket.on('authenticate', (data, cb) => {
						expect(data.type).to.equal('client')
						expect(data.environment).to.equal('test')
						expect(data.mac).to.equal(mac)
						cb({ success: true, message: 'connected' })
						io.close()
						done()
					})
				})
				
			})
			
		})
		
	})
	
}