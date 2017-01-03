/**
* @Author: chris
* @Date:   2017-01-01T13:03:05+01:00
* @Filename: plugin.js
* @Last modified by:   chris
* @Last modified time: 2017-01-03T11:18:02+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const fs = require('fs')
const path = require('path')
// const jsop = require('jsop')

class Plugin {

  constructor (client, name, options) {
    // TODO: asserts
    this._client = client
    this._name = name.toLowerCase()
    this._version = options.version
    this._nativeUI = options.nativeUI

    // when plugin exposes settings, initalize a settings file
    if (typeof this.getSettingsForm === 'function') {
      this._settingsFile = `${client.config.paths.settingsDir}/${this.getName()}.json`
      this._settings = JSON.parse(fs.readFileSync(this._settingsFile))
    }
  }

  getName () {
    return this._name
  }

  getVersion () {
    return this._version
  }

  getNativeUI () {
    // TODO: better resolve
    return path.resolve(__dirname, this._name, this._nativeUI)
  }

  getApiRoot (router) {
    router.get('/', function (req, res) {
      res.ok({ name: this.getName(), version: this.getVersion(), nativeUI: this.getNativeUI() })
    }.bind(this))

    return router
  }

  getApi (router) {
    this._client.log(`[Plugin ${this.getName()}] - No HTTP API exposed`)
    return router
  }

  getSettings () {
    return this._settings
  }

  setSettings (newSettings, callback) {
    this._settings = newSettings
    fs.writeFile(this._settingsFile, JSON.stringify(this._settings), function (err) {
      if (err) return callback(err)
      return callback()
    })
  }

  /**
   * Emit an event, automatically pre-pended with plugin namespace
   * @param {String} eventName
   * @param {Object} eventData
   */
  emit (eventName, eventData) {
    this._client.events.emit(`${this._name}.${eventName}`, eventData)
  }

  /**
   * Listen to global or local events
   * @param {String} eventName
   * @param {Function} callback
   */
  on (eventName, callback) {
    const eventNameArray = eventName.split('.')
    if (eventNameArray.length === 1) {
      this._client.events.on(`${this._name}.${eventNameArray[0]}`, callback)
    } else {
      this._client.events.on(eventName, callback)
    }
  }
}

module.exports = Plugin
