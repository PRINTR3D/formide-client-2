/**
* @Author: chris
* @Date:   2016-12-18T17:19:51+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:36:12+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const express = require('express')

class UI {

  constructor (client) {
    assert(client.log, '[ui] - client.log not passed')
    assert(client.config, '[ui] - client.config not passed')
    assert(client.config.http, '[ui] - client.config.http not passed')
    assert(client.config.http.www, '[ui] - client.config.http.www not passed')

    const self = this

    this.app = express()
    this.server = require('http').Server(this.app)
    this.server.listen(client.config.http.www, function () {
      client.log(`[ui] - Running on port ${self.server.address().port}`, 1, 'info')
    })

    // basic app environment info
    this.app.get('/api/env', function (req, res) {
      return res.ok({
        environment: client.env,
        name: 'formide-client',
        version: client.version,
        location: 'local'
      })
    })

    // public assets
    this.app.get('/public/*', function (req, res) {
      return res.sendFile(req.params[0], { root: './public' })
    })

    // angular app
    this.app.get('/*', function (req, res) {
      return res.sendFile('index.html', { root: './public' })
    })

    return {
      app: this.app,
      server: this.server
    }
  }
}

module.exports = UI
