/**
* @Author: chris
* @Date:   2017-01-07T17:46:59+01:00
* @Filename: printjob.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T17:57:03+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in db/printer router')
  assert(http, '[http] - http not passed in db/printer router')

  router.get('/', function (req, res) {

  })

  return router
}
