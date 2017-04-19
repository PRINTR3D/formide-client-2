'use strict'

// modules
const assert = require('assert')
const path = require('path')
const express = require('express')
const cors = require('cors')

class UI {

  constructor (client) {
    assert(client.logger.log, '[ui] - client.logger.log not passed')
    assert(client.config, '[ui] - client.config not passed')
    assert(client.config.http, '[ui] - client.config.http not passed')
    assert(client.config.http.www, '[ui] - client.config.http.www not passed')

    const self = this

    // express app
    this.app = express()
    
    // use CORS headers
    this.app.use(cors())
    
    // server
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
    
    // index.html
    this.app.get('/', function (req, res) {
	    return res.sendFile(path.join(__dirname, 'index.html'))
    })

    // public assets
    this.app.get('/*', function (req, res) {
      return res.sendFile(path.join(__dirname, 'public', req.params[0]))
    })

    return {
      app: this.app,
      server: this.server
    }
  }
}

module.exports = UI
