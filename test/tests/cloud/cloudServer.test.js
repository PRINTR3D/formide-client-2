'use strict'

const expect = require('chai').expect
const getMac = require('getmac')
let mac = null
const GCODE_FILE = 'ZY8SzVDOoEHacqma4E9jbJi6qIbV1fZPRsVtVJNLPSxrP1okxE' // hardcoded G-code from cloud we know exists

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
						
						// respond with connection success
						cb({ success: true, message: 'connected' })
						
						// clean up
						io.close()
						done()
					})
				})
				
			})
			
			it('should start printing a queueItem from the cloud', (done) => {
				
				const io = require('socket.io').listen(1338)
				
				io.on('connection', (socket) => {
					socket.on('authenticate', (data, cb) => {
						
						// respond with connection success
						cb({ success: true, message: 'connected' })
						
						// start printing queueItem
						socket.emit('printQueueItem', {
							port: '/dev/virt0', // the virtual printer plugin uses /dev/virt0
							queueItemId: '8f00b837-5309-4ab4-a5eb-ee62b1461388',
							gcode: GCODE_FILE
						})
						
						// check printQueueItem response
						socket.on('printQueueItem', (data) => {
							expect(data.result.success).to.equal(true)
							expect(data.result.port).to.equal('/dev/virt0')
							expect(data.result.printerResponse.code).to.equal(200)
							
							// check first printer status after starting print on virtual printer
							socket.once('printer.status', (printerStatus) => {
								expect(printerStatus.port).to.equal('/dev/virt0')
								expect(printerStatus.status).to.equal('printing')
								expect(printerStatus.queueItemId).to.equal('8f00b837-5309-4ab4-a5eb-ee62b1461388')
								expect(printerStatus.progress).to.equal(50)
								
								// clean up
								io.close()
								done()
							})
						})
					})
				})
				
			})
			
		})
		
	})
	
}