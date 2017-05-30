'use strict'

class Client {

  /**
   * New Client
   * @param config
   */
  constructor (config) {

    // events
    this.events = require('./events')

    // config & logging
    this.config = config
    const Logger = require('./utils/logger')
    this.logger = new Logger(this)

    // start drivers as soon as possible
    const Drivers = require('./drivers')
    this.drivers = new Drivers(this)

    // system
    this.version = config.version
    this.system = {}
    this.env = process.env.NODE_ENV

    try {

      const determineDevice = require('./utils/determineDevice')
      
      // check if known device, will set OS_IMPLEMENTATION env param if found, otherwise default to The Element
	    const OS_IMPLEMENTATION = determineDevice() || process.env.OS_IMPLEMENTATION || 'the_element'
      this.logger.log(`Loading native implementation for ${OS_IMPLEMENTATION}...`, 'info')
      
      // bind the implementation APIs
      this.system.OS_IMPLEMENTATION = OS_IMPLEMENTATION
      this.system.network = require(`../implementations/${OS_IMPLEMENTATION}/network`)
      this.system.update = require(`../implementations/${OS_IMPLEMENTATION}/update`)
      
    } catch (e) {
      this.logger.log(`No native client implementation found: ${e.message}`, 'warning')
    }

    // detect plugins
    const PluginHandler = require('../plugins/pluginHandler')
    this.plugins = new PluginHandler(this)

    // core
    const Storage = require('./storage')
    this.storage = new Storage(this)
    const Auth = require('./auth')
    this.auth = new Auth(this)
    const Cloud = require('./cloud')
	  this.cloud = new Cloud(this)

    // interfaces
    const Http = require('../interfaces/http')
    this.http = new Http(this)
    const Ws = require('../interfaces/ws')
    this.ws = new Ws(this)
    const Www = require('../www')
    this.www = new Www(this)

    // plugin init
    this.plugins.initializePlugins()

    this.logger.log('Initiated new Client', 'info')

    return this
  }
}

module.exports = Client
