/**
* @Author: chris
* @Date:   2017-01-08T15:43:33+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-10T00:53:11+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const Plugin = global.Plugin
const pkg = require('./package.json')

class PresetManager extends Plugin {
  constructor (client) {
    super(client, pkg)
    this.loadPresets()
  }

  getApi (router) {
    require('./resourceApi')(router, this._client.db, 'Material')
    require('./resourceApi')(router, this._client.db, 'Printer')
    require('./resourceApi')(router, this._client.db, 'SliceProfile')
    return router
  }

  loadPresets () {
    this._client.db.Material.findOneAndUpdate({
      'customProperties.preset': true,
      'customProperties.order': 0
    }, {
      name: 'PLA (preset)',
      type: 'PLA',
      temperature: 200,
      firstLayersTemperature: 210,
      bedTemperature: 50,
      firstLayersBedTemperature: 55,
      feedRate: 100,
      customProperties: {
        preset: true,
        order: 0
      }
    }, {
      upsert: true,
      setDefaultsOnInsert: true,
      new: true
    }).catch(console.error)
  }

  getPresets () {

  }

  addPreset () {

  }

  updatePreset () {

  }

  deletePreset () {

  }
}

module.exports = PresetManager
