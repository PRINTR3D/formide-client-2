'use strict'

const co = require('co')
const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in network router')
  assert(client, '[http] - http not passed in network router')

  /**
   * @api {get} /api/network/status Network status
   * @apiGroup Network
   * @apiDescription Get the current network status
   * @apiVersion 2.0.0
   */
  router.get('/status', function (req, res) {
    if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
    co(function*() {
      const isConnected = yield client.system.network.status()
      const ip = yield client.system.network.ip()
      const publicIp = yield client.system.network.publicIp()
      const network = yield client.system.network.network()
      const mac = yield client.system.network.mac()

      return res.ok({
        ip,
        publicIp,
        mac,
        isConnected,
        network
      })
    }).then(null, res.serverError)
  })

  /**
   * @api {get} /api/network/list List nearby networks
   * @apiGroup Network
   * @apiDescription List nearby wireless networks to connect to
   * @apiVersion 2.0.0
   */
  router.get('/list', function (req, res) {
    if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
    client.system.network.list().then(function (networks) {
      console.log('networks', networks)
      return res.ok(networks)
    }).catch(res.serverError)
  })

  /**
   * @api {post} /api/network/connect Connect to Wi-Fi network
   * @apiGroup Network
   * @apiDescription Connect to a nearby wireless network
   * @apiVersion 2.0.0
   */
  router.post('/connect', http.checkAuth.admin, function (req, res) {
    if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
	  co(function*() {
	    const connect = yield client.system.network.connect(req.body)
      if (!connect) return res.badRequest('Incorrect network credentials')
      
      const ip = yield client.system.network.ip()
      if (!ip) return res.notFound('Could not retrieve IP address')
      
      return res.ok({ message: 'Connected to network', ip })
	  }).then(null, res.serverError)
  })

  return router
}
