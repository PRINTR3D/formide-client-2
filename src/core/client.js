'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

// core modules
const Events = require('./events')
const DB = require('./db')
const Drivers = require('./drivers')
const log = require('./utils/logger')

// other modules
const Slicer = require('../slicer')
const Www = require('../www')

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
    // utils
    try {
      const OS_IMPLEMENTATION = process.env.OS_IMPLEMENTATION || 'the_element'
      this.network = require(`../implementations/${OS_IMPLEMENTATION}/network`)
    } catch (e) {
      log(`[core] - No native client implementation found: ${e.message}`, 1, 'warn')
    }

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

    return this
  }
}

module.exports = Client
