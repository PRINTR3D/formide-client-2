/**
* @Author: chris
* @Date:   2016-12-18T17:23:12+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T02:09:15+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const co = require('co')

class Slicer {

  constructor (client) {
    assert(client, '[slicer] - client not passed')

    this._client = client

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

  slice (callback) {
    co(function* () {
      const spaceLeft = yield this._client.utils.diskSpace.hasSpaceLeft()
      console.log(spaceLeft)
      callback(null, true)
    }.bind(this)).then(null, callback)
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
