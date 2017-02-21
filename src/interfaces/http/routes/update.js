'use strict'

const router = require('express').Router()

module.exports = function (client) {
  router.get('/status', function (req, res) {
    if (!client.system.update) return res.notImplemented('Updates are not available on this sytem')
  })

  router.get('/current', function (req, res) {
    return res.ok({
      clientVersion: client.version
    })
  })

  router.get('/check', function (req, res) {
    if (!client.system.update) return res.notImplemented('Updates are not available on this sytem')
    // TODO
  })

  router.post('/do', function (req, res) {
    if (!client.system.update) return res.notImplemented('Updates are not available on this sytem')
    // TODO
  })

  return router
}
