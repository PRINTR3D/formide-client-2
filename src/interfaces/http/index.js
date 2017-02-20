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
const checkParams = require('./middleware/checkParams')
const morgan = require('morgan')

/**
 * Http server setup
 */
class Http {

  constructor (client) {
    assert(client, '[http] - client not passed in constructor')

    // link to self to prevent .bind waterfall
    const self = this

    // client needed in loadPluginRoutes
    this._client = client

    // setup express app
    this.app = express()

    // setup http server on app
    this.httpServer = require('http').Server(this.app)

    // listen to port stated in app.port config (usually port 1337)
    this.httpServer.listen(client.config.http.api, function () {
      client.logger.log(`API running on port ${self.httpServer.address().port}`, 'info')
    })

    // request logging
    if (client.config.http.hasOwnProperty('requestLogging') && client.config.http.requestLogging !== false) {
	    this.app.use(morgan(':remote-addr - :method :url [:response-time ms]'))
    }

    // use json body parser for json post requests
    this.app.use(bodyParser.json({ limit: '500mb' }))

    // use json body parser for url encoded post requests
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }))

    // use cookie parser middleware
    this.app.use(cookieParser())

    // use session middleware
    this.app.use(sessionMiddleware)

    // use bearer token middleware
    this.app.use(bearerToken({
      queryKey: 'access_token'
    }))

    // check auth middleware (can be used in routes using http.checkAuth.jwt)
    this.checkAuth = require('./middleware/checkAuth')(client)
    this.checkParams = require('./middleware/checkParams')

    // use cors middleware
    this.app.use(cors({
      origin: true,
      credentials: true
    }))

    // use response handlers
    this.app.use(function (req, res, next) {
      res.ok = require('./responses/ok').bind({ req, res })
      res.badRequest = require('./responses/badRequest').bind({ req, res })
      res.conflict = require('./responses/conflict').bind({ req, res })
      res.forbidden = require('./responses/forbidden').bind({ req, res })
      res.notFound = require('./responses/notFound').bind({ req, res })
      res.serverError = require('./responses/serverError').bind({ req, res })
      res.unauthorized = require('./responses/unauthorized').bind({ req, res })
      res.notImplemented = require('./responses/notImplemented').bind({ req, res })
      next()
    })

    // api routes
	  this.app.use('/api/auth', require('./routes/auth')(client, this))
    this.app.use('/api/network', require('./routes/network')(client, this))
    this.app.use('/api/printer', require('./routes/printer')(client, this))
    this.app.use('/api/storage', require('./routes/storage')(client, this))
	  this.app.use('/api/system', require('./routes/system')(client, this))
	  this.app.use('/api/update', require('./routes/update')(client, this))

    // redirect root URL to local dashboard
    this.app.get('/', function (req, res) {
      return res.redirect(`http://${req.headers.host.split(':')[0]}:${client.config.http.www}`)
    })

    return this
  }

  loadPluginRoutes (plugin) {
    const pluginRootRouter = express.Router()
    this.app.use(`/plugins/${plugin.getName()}`, plugin.getApiRoot(pluginRootRouter))

    if (typeof plugin.getApi === 'function') {
      const pluginApiRouter = express.Router()
      this.app.use(`/plugins/${plugin.getName()}/api`, plugin.getApi(pluginApiRouter))
    }

    if (typeof plugin.getWebRoot === 'function') {
      this.app.use(`/plugins/${plugin.getName()}/www*`, function (req, res) {
        res.sendFile(req.params[0] || 'index.html', { root: plugin.getWebRoot() })
      })
    }
  }
}

module.exports = Http
