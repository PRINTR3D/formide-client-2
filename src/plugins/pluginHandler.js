/**
* @Author: chris
* @Date:   2017-01-03T12:04:39+01:00
* @Filename: pluginHandler.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T15:21:42+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

// packages
const fs = require('fs')
const decache = require('decache')

class PluginHandler {
  constructor (client) {
    this._client = client
    this._plugins = {}

    // load all available plugins on boot
    this.loadPlugins(`${__dirname}/bundled`) // bundled plugins
    this.loadPlugins(client.config.paths.pluginDir) // user installed plugins
  }

  getPlugins () {
    return this._plugins
  }

  getPlugin (pluginName) {
    if (this._plugins.hasOwnProperty(pluginName)) {
      return this._plugins[pluginName]
    } else {
      return false
    }
  }

  loadPlugins (pluginDir) {
    const pluginList = fs.readdirSync(pluginDir).filter((item) => {
      return fs.statSync(`${pluginDir}/${item}`).isDirectory()
    })

    for (var i = 0; i < pluginList.length; i++) {
      const pluginPath = `${pluginDir}/${pluginList[i]}`
      this.loadPlugin(pluginPath)
    }
  }

  loadPlugin (pluginPath) {
    const Plugin = require(pluginPath)
    const plugin = new Plugin(this._client)
    this._plugins[plugin.getName()] = plugin
    this._client.http.loadPluginRoutes(plugin)
    this._client.logger.log(`Plugin ${plugin.getName()} loaded`, 'info')
  }

  unloadPlugin (pluginName) {
    const pluginPath = `${this._pluginDir}/${pluginName}`
    decache(pluginPath)
    delete this._plugins[pluginName]
  }

  reloadPlugin (pluginName) {
    this.unloadPlugin(pluginName)
    const pluginPath = `${this._pluginDir}/${pluginName}`
    this.loadPlugin(pluginPath)
  }

  installPlugin () {
    // TODO: install
    this.loadPlugin()
  }

  uninstallPlugin () {
    this.unloadPlugin()
    // TODO: uninstall
  }
}

module.exports = PluginHandler
