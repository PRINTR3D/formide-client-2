/**
* @Author: chris
* @Date:   2016-12-18T00:07:15+01:00
* @Filename: network.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T16:39:56+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client) {
  assert(client, '[http] - client not passed in network router')

  // TODO: this is a mock!
  router.get('/list', function (req, res) {
    setTimeout(function () {
      return res.ok([{
        ssid: 'printr'
      }, {
        ssid: 'TheElementNetwork'
      }, {
        ssid: 'mynetwork'
      }])
    }, 2500)
  })

  router.post('/connect', function (req, res) {
    console.log(req.body)
    setTimeout(function () {
      return res.ok({
        message: 'Connected to network',
        ip: '127.0.0.1',
        data: req.body
      })
    }, 2500)
  })

  return router
}
