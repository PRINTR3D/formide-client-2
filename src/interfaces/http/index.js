/**
* @Author: chris
* @Date:   2016-12-18T17:21:23+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:35:03+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

// modules
const assert = require('assert')
const express = require('express')
const expressSession = require('express-session')
const MemoryStore = expressSession.MemoryStore
const sessionStore = new MemoryStore()
const sessionMiddleware = expressSession({ store: sessionStore, secret: 'secret', key: 'formide.sid', saveUninitialized: false, resave: false })
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const bearerToken = require('express-bearer-token')

/**
 * Http server setup
 */
class Http {

  constructor (client) {
    assert(client, '[http] - client not passed in constructor')

    // link to self to prevent .bind waterfall
    const self = this

    // setup express app
    this.app = express()

    // setup http server on app
    this.httpServer = require('http').Server(this.app)

    // listen to port stated in app.port config (usually port 1337)
    this.httpServer.listen(client.config.http.api, function () {
      client.log(`[http] - API running on port ${self.httpServer.address().port}`, 1, 'info')
    })

    // TODO: endpoint request logging

    // use json body parser for json post requests
    this.app.use(bodyParser.json({ limit: '500mb' }))

    // use json body parser for url encoded post requests
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }))

    // use cookie parser middleware
    this.app.use(cookieParser())

    // use session middleware
    this.app.use(sessionMiddleware)

    // TODO: use passport middleware
    // this.app.use(passport.initialize());
    // this.app.use(passport.session());

    // use bearer token middleware
    this.app.use(bearerToken({
      queryKey: 'access_token'
    }))

    // use cors middleware
    this.app.use(cors({
      origin: true,
      credentials: true
    }))

    // use response handlers
    this.app.use(function (req, res, next) {
      res.ok = require('./responses/ok').bind({ req: req, res: res })
      res.badRequest = require('./responses/badRequest').bind({ req: req, res: res })
      res.conflict = require('./responses/conflict').bind({ req: req, res: res })
      res.forbidden = require('./responses/forbidden').bind({ req: req, res: res })
      res.notFound = require('./responses/notFound').bind({ req: req, res: res })
      res.serverError = require('./responses/serverError').bind({ req: req, res: res })
      res.unauthorized = require('./responses/unauthorized').bind({ req: req, res: res })
      next()
    })

    // routes
    this.app.use('/api/system', require('./routes/system')(client))
    this.app.use('/api/printer', require('./routes/printer')(client))

    return {
      app: this.app,
      server: this.httpServer
    }
  }
}

module.exports = Http
