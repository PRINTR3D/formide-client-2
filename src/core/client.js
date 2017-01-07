/**
* @Author: chris
* @Date:   2016-12-18T17:20:55+01:00
* @Filename: client.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T01:51:35+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

// packages
const assert = require('assert')

// core modules
const Events = require('./events')
const DB = require('./db')
const Drivers = require('./drivers')
const log = require('./utils/logger')

// other modules
const Slicer = require('../slicer')
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

    // system
    this.version = config.version
    this.system = {}

    try {
      const OS_IMPLEMENTATION = process.env.OS_IMPLEMENTATION || 'raspberry_pi'
      this.system.network = require(`../implementations/${OS_IMPLEMENTATION}/network`)
      this.system.ota = require(`../implementations/${OS_IMPLEMENTATION}/ota`)
    } catch (e) {
      log(`[core] - No native client implementation found: ${e.message}`, 1, 'warn')
    }

    // utils
    this.utils = {}
    this.utils.diskSpace = require('./utils/diskSpace')(this)

    // core
    this.log = log
    this.config = config
    this.events = Events
    this.db = new DB(this)
    this.drivers = new Drivers(this)

    // other
    this.slicer = new Slicer(this)

    // interfaces
    this.cloud = new Cloud(this)
    this.http = new Http(this)
    this.ws = new Ws(this)
    this.www = new Www(this)

    this.log('[core] - Initiated new Client', 1, 'info')

    // plugins
    this.plugins = new PluginHandler(this)
    this.log('[core] - Loaded plugins', 1, 'info')

    return this
  }
}

module.exports = Client
