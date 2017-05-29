'use strict'

// packages
const assert = require('assert')

// core modules
const Events = require('./events')
const Drivers = require('./drivers')
const Logger = require('./utils/logger')
const Auth = require('./auth')
const Storage = require('./storage')
const Cloud = require('./cloud')

// interfaces
const Http = require('../interfaces/http')
const Ws = require('../interfaces/ws')
const Www = require('../www')

// other
const PluginHandler = require('../plugins/pluginHandler')
const determineDevice = require('./utils/determineDevice')

class Client {

  /**
   * New Client
   * @param config
   */
  constructor (config) {
    assert(config, '[core] - config not passed')
    assert(config.version, '[core] - config.version not passed')

    // events
    this.events = Events

    // config & logging
    this.config = config
    this.logger = new Logger(this)

    // start drivers as soon as possible
    this.drivers = new Drivers(this)

    // system
    this.version = config.version
    this.system = {}
    this.env = process.env.NODE_ENV

    try {
      
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

    // core
    this.storage = new Storage(this)
    this.auth = new Auth(this)
	  this.cloud = new Cloud(this)

    // interfaces
    this.http = new Http(this)
    this.ws = new Ws(this)
    this.www = new Www(this)

    this.logger.log('Initiated new Client', 'info')

    // plugins
    this.plugins = new PluginHandler(this)
    this.logger.log('Loaded plugins', 'info')

    return this
  }
}

module.exports = Client
