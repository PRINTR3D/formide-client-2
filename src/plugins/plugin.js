/**
* @Author: chris
* @Date:   2017-01-01T13:03:05+01:00
* @Filename: plugin.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T16:14:31+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const fs = require('fs')

class Plugin {

  constructor (client, pkg) {
    // TODO: asserts
    this._client = client
    this._name = pkg.name.toLowerCase()
    this._version = pkg.version

    // when plugin exposes settings, initalize a settings file
    if (typeof this.getSettingsForm === 'function') {
      this._settingsFile = `${client.config.paths.settingsDir}/${this.getName()}.json`
      try {
        this._settings = JSON.parse(fs.readFileSync(this._settingsFile))
      } catch (e) {
        client.log(`${this.getName()}: Error loading settings from file: ${e.message}`, 'warn')
        this._settings = false
      }
    }
  }

  getJSON () {
    return {
      name: this.getName(),
      version: this.getVersion(),
      settings: this.getSettings(),
      settingsForm: this.getSettingsForm()
    }
  }

  getName () {
    return this._name
  }

  getVersion () {
    return this._version
  }

  // getNativeUI () {
  //   // TODO: better resolve
  //   return path.resolve(__dirname, this._name, this._nativeUI)
  // }

  getApiRoot (router) {
    router.get('/', function (req, res) {
      res.ok({ name: this.getName(), version: this.getVersion() })
    }.bind(this))

    return router
  }

  getApi (router) {
    return router
  }

  getSettings () {
    return this._settings
  }

  setSettings (newSettings, callback) {
    this._settings = newSettings
    try {
      const settingsString = JSON.stringify(this._settings)
      fs.writeFile(this._settingsFile, settingsString, function (err) {
        if (err) return callback(err)
        return callback()
      })
    } catch (e) {
      return callback(e)
    }
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
