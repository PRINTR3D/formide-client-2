'use strict'

const fs = require('fs')
const assert = require('assert')

class Plugin {

  constructor (client, pkg) {
    assert(client, 'client instance not passed in plugin')
    assert(pkg.name, 'package name not passed in plugin')
    assert(pkg.version, 'package version not passed in plugin')
    
    this._client = client
    this._name = pkg.name.toLowerCase()
    this._version = pkg.version
  }

  getName () {
    return this._name
  }

  getVersion () {
    return this._version
  }

  getApiRoot (router) {
    router.get('/', function (req, res) {
      res.ok({ name: this.getName(), version: this.getVersion() })
    }.bind(this))

    return router
  }

  getWebRoot () {
    return false
  }

  getApi (router) {
    return router
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
