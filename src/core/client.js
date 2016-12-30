/**
* @Author: chris
* @Date:   2016-12-18T17:20:55+01:00
* @Filename: client.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:33:04+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

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
