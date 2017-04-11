'use strict'

const assert = require('assert')
const path = require('path')
const express = require('express')

class UI {

  constructor (client) {
    assert(client.logger.log, '[ui] - client.logger.log not passed')
    assert(client.config, '[ui] - client.config not passed')
    assert(client.config.http, '[ui] - client.config.http not passed')
    assert(client.config.http.www, '[ui] - client.config.http.www not passed')

    const self = this

    this.app = express()
    this.server = require('http').Server(this.app)
    this.server.listen(client.config.http.www, function () {
      client.logger.log(`www running on port ${self.server.address().port}`, 'info')
    })

    // basic app environment info
    this.app.get('/api/env', function (req, res) {
      return res.send({
        environment: client.env,
        name: 'formide-client',
        version: client.version,
        location: 'local'
      })
    })

    // public folder
    this.app.get('/*', function (req, res) {
      return res.sendFile(req.params[0], { root: path.join(__dirname, 'public') })
    })

    return {
      app: this.app,
      server: this.server
    }
  }
}

module.exports = UI
