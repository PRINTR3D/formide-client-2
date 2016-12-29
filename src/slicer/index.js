'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert = require('assert')

class Slicer {

  constructor (client) {
    assert(client, '[slicer] - client not passed')

    // TODO: use same threading setup as drivers?
    try {
      this.katana = require('katana-slicer')
      this._version = require('katana-slicer/package.json').version
      this._reference = require('katana-slicer/reference.json')
      client.log(`[slicer] - Loaded Katana v${this._version}`, 1, 'info')
    } catch (e) {
      client.log(`[slicer] - Cannot load Katana binary: ${e.message}`, 1, 'warn')
    }
  }

  getVersion () {
    return this._version
  }

  slice () {

  }

  createSliceRequest () {

  }

  /**
   * Get reference file for Katana slice engine
   * @returns {*}
   */
  getReferenceFile () {
    return this._reference
  }
}

module.exports = Slicer
