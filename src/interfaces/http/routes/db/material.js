/**
* @Author: chris
* @Date:   2017-01-07T17:46:44+01:00
* @Filename: material.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T20:00:24+01:00
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