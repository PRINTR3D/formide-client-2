'use strict'

const co = require('co')
const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[client] - client not passed in network router')
  assert(http, '[http] - http not passed in network router')

  /**
   * @api {get} /api/network/status Network:status
   * @apiGroup Network
   * @apiDescription Get the current network status
   * @apiVersion 2.0.0
   */
  router.get('/status', function (req, res) {
  	
  	// check if networking is available
	  if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
	  
    co(function*() {
    	
      	// default all status data to false
      	let isConnected = false, isHotspot = false, ip = false, publicIp = false, network = false, mac = false
	    
	    // get available status data
	    if (typeof client.system.network.status === 'function') isConnected = yield client.system.network.status()
    	  if (typeof client.system.network.network === 'function') network = yield client.system.network.network()
	    if (typeof client.system.network.ip === 'function') ip = yield client.system.network.ip()
	    if (typeof client.system.network.publicIp === 'function') publicIp = yield client.system.network.publicIp()
	    if (typeof client.system.network.mac === 'function') mac = yield client.system.network.mac()
	    if (typeof client.system.network.hotspotStatus === 'function') isHotspot = yield client.system.network.hotspotStatus()
	    
      return res.ok({ ip, publicIp, mac, isConnected, isHotspot, network })
    }).then(null, res.serverError)
  })

  /**
   * @api {get} /api/network/list Network:list
   * @apiGroup Network
   * @apiDescription List nearby wireless networks to connect to
   * @apiVersion 2.0.0
   */
  router.get('/list', function (req, res) {
    if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
	  if (!client.system.network.list) return res.notImplemented('Networking is not implemented on this device')
    client.system.network.list().then(function (networks) {
      return res.ok(networks)
    }).catch(res.serverError)
  })

  /**
   * @api {post} /api/network/connect Network:connect
   * @apiGroup Network
   * @apiDescription Connect to a nearby wireless network
   * @apiVersion 2.0.0
   * @apiHeader {String} Authentication Valid Bearer JWT token
   * @apiParam {String} ssid
   * @apiParam {String} password
   */
  router.post('/connect', http.checkAuth.jwt, http.checkParams(['ssid']), function (req, res) {
    if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
	  if (!client.system.network.connect) return res.notImplemented('Networking is not implemented on this device')
	  co(function*() {
	    yield client.system.network.connect(req.body) // will trigger error when incorrect
		  return res.ok({ message: 'Connected to network' })
	  }).then(null, res.serverError)
  })
	
	/**
	 * @api {post} /api/network/reset Network:reset
	 * @apiGroup Network
	 * @apiDescription Reset the Wi-Fi network connection
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 */
	router.post('/reset', http.checkAuth.jwt, function (req, res) {
		if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
		if (!client.system.network.reset) return res.notImplemented('Networking is not implemented on this device')
		co(function*() {
			const reset = yield client.system.network.reset()
			if (!reset) return res.conflict('Could not reset Wi-Fi connection')
			return res.ok(reset)
		}).then(null, res.serverError)
	})
	
	/**
	 * @api {post} /api/network/hotspot Network:hotspot
	 * @apiGroup Network
	 * @apiDescription Enable or disable the Wi-Fi hotspot mode (The Element)
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {Boolean} enabled Enable or disable the hotspot mode
	 */
	router.post('/hotspot', http.checkAuth.jwt, http.checkParams(['enabled']), function (req, res) {
		if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
		if (!client.system.network.hotspot) return res.notImplemented('Networking is not implemented on this device')
		co(function*() {
			const hotspot = yield client.system.network.hotspot(req.body.enabled)
			if (!hotspot) return res.conflict('Could not enable or disable hotspot')
			return res.ok(hotspot)
		}).then(null, res.serverError)
	})

  return router
}
