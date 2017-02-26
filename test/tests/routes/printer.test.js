'use strict'

const jwt = require('../../../src/core/utils/jwt')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const VIRTUAL_PRINTER_PORT = '/dev/virt0'

module.exports = (client) => {
	
	const user = client.auth.find('admin@local')
	const token = jwt.sign(user)
	
	describe('Printer', () => {
		
		describe('GET /api/printer', () => {
			it('should list available printers', (done) => {
				chai.request(client.http.app).get('/api/printer').end((req, res) => {
					expect(res.status).to.equal(200)
					expect(res.body.length).to.equal(1) // virtual printer is always there during tests
					done()
				})
			})
		})
		
		describe('GET /api/printer/:port', () => {
			it('should return the status for an available printer', (done) => {
				setTimeout(() => {
					chai.request(client.http.app).get('/api/printer/' + encodeURIComponent(VIRTUAL_PRINTER_PORT)).end((req, res) => {
						expect(res.status).to.equal(200)
						expect(res.body.port).to.equal(VIRTUAL_PRINTER_PORT)
						done()
					})
				}, 1000) // time out needed to give virtual printer some time to start
			})
			
			it('should throw a 404 for a printer that is not available', (done) => {
				chai.request(client.http.app).get('/api/printer/' + encodeURIComponent('/dev/ttyUSB0')).end((req, res) => {
					expect(res.status).to.equal(404)
					done()
				})
			})
		})
		
		describe('GET /api/printer/:port/pause', () => {
			it('should pause the printer if it is available and the user is authorized', (done) => {
				// set virtual printer to printing so we can pause it
				client.drivers.printers[VIRTUAL_PRINTER_PORT].setStatus('printing')
				
				chai.request(client.http.app).get('/api/printer/' + encodeURIComponent(VIRTUAL_PRINTER_PORT) + '/pause').set('Authorization', `Bearer ${token}`).end((req, res) => {
					expect(res.status).to.equal(200)
					expect(res.body).to.equal('OK')
					done()
				})
			})
		})
		
	})
	
}