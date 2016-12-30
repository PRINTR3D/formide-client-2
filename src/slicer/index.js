/**
* @Author: chris
* @Date:   2016-12-18T17:23:12+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:32:44+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

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
