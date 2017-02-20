'use strict'

// packages
const assert = require('assert')

// core modules
const Events = require('./events')
const Drivers = require('./drivers')
const Logger = require('./utils/logger')

// other modules
const Www = require('../www')
const PluginHandler = require('../plugins/pluginHandler')

// interfaces
const Http = require('../interfaces/http')
const Ws = require('../interfaces/ws')
const Cloud = require('../interfaces/cloud')

class Client {

  /**
   * New Client
   * @param config
   */
  constructor (config) {
    assert(config, '[core] - config not passed')
    assert(config.version, '[core] - config.version not passed')

    // config & logging
    this.config = config
    this.logger = new Logger(this)

    // system
    this.version = config.version
    this.system = {}
    this.env = process.env.NODE_ENV

    try {
      const OS_IMPLEMENTATION = process.env.OS_IMPLEMENTATION || 'raspberry_pi'
      this.system.network = require(`../implementations/${OS_IMPLEMENTATION}/network`)
      this.system.update = require(`../implementations/${OS_IMPLEMENTATION}/update`)
    } catch (e) {
      this.logger.log(`No native client implementation found: ${e.message}`, 'warning')
    }

    // utils
    this.utils = {}
    this.utils.diskSpace = require('./utils/diskSpace')(this)

    // core
    this.events = Events
    this.drivers = new Drivers(this)
    this.storage = require('./storage')

    // interfaces
    this.cloud = new Cloud(this)
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
