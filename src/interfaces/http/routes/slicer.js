/**
* @Author: chris
* @Date:   2017-01-07T01:42:53+01:00
* @Filename: slicer.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T02:10:56+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in slicer router')
  assert(http, '[http] - http not passed in slicer router')

  router.get('/reference', function (req, res) {
    const reference = client.slicer.getReferenceFile()
    return res.ok(reference)
  })

  router.post('/slice', function (req, res) {
    client.slicer.slice(function (err, result) {
      console.log(err, result)
      if (err) return res.serverError(err)
    })
  })

  return router
}
