/**
* @Author: chris
* @Date:   2017-01-08T15:43:33+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-13T15:51:55+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

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
    require('./cloudSyncApi')(router, this._client.db)
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

    this._client.db.Printer.findOneAndUpdate({
      'customProperties.preset': true,
      'customProperties.order': 0
    }, {
      name: 'Felix Pro Series',
      type: 'fdm',
      manufacturer: 'Felix Robotics',
      bed: {
        heated: true,
        printerType: 'CARTESIAN',
        x: 237,
        y: 244,
        z: 235,
        placeOfOrigin: 'CORNER'
      },
      axis: {
        x: 1,
        y: 1,
        z: 1
      },
      extruders: [{
        id: 0,
        name: 'extruder1',
        nozzleSize: 350,
        filamentDiameter: 1750
      }, {
        id: 0,
        name: 'extruder2',
        nozzleSize: 350,
        filamentDiameter: 1750
      }],
      abilities: []
    })
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
