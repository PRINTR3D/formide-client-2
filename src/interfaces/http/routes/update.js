/**
* @Author: chris
* @Date:   2016-12-30T14:42:18+01:00
* @Filename: update.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T15:00:40+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const router = require('express').Router()

module.exports = function (client) {
  router.get('/status', function (req, res) {
    if (!client.system.ota) return res.notImplemented('OTA updates are not available on this sytem')
  })

  router.get('/current', function (req, res) {
    return res.ok({
      clientVersion: client.version
    })
  })

  router.get('/check', function (req, res) {
    if (!client.system.ota) return res.notImplemented('OTA updates are not available on this sytem')
    // TODO
  })

  router.post('/do', function (req, res) {
    if (!client.system.ota) return res.notImplemented('OTA updates are not available on this sytem')
    // TODO
  })

  return router
}
