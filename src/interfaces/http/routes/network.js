/**
* @Author: chris
* @Date:   2016-12-18T00:07:15+01:00
* @Filename: network.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T23:37:48+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const co = require('co')
const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in network router')
  assert(client, '[http] - http not passed in network router')

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

  router.get('/list', function (req, res) {
    if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
    client.system.network.list().then(function (networks) {
      return res.ok(networks)
    }).catch(res.serverError)
  })

  router.post('/connect', http.checkAuth.admin, function (req, res) {
    if (!client.system.network) return res.notImplemented('Networking is not implemented on this device')
    client.system.network.connect(req.body).then(function (result) {
      client.system.network.ip().then(function (ip) {
        // TODO: check result?
        return res.ok({ message: 'Connected to network', ip })
      }).catch(res.serverError)
    }).catch(res.serverError)
  })

  return router
}
