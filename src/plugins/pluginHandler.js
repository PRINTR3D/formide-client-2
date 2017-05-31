'use strict'

// packages
const fs = require('fs')
const path = require('path')
global.Plugin = require('./plugin')

class PluginHandler {

  constructor (client) {
    this._client = client
    this._plugins = {}

    // load system plugins on The Element
    if (client.system.OS_IMPLEMENTATION === 'the_element') {
      if (fs.existsSync(path.resolve('/opt/plugins'))) {
        this.loadPlugins(path.resolve('/opt/plugins'))
      }
    }

    // load user plugins
    this.loadPlugins(path.resolve(client.config.paths.pluginDir))

    client.logger.log('Loaded plugins', 'info')
  }

  /**
   * Load all plugins found in given directory
   * @param {*} pluginDir 
   */
  loadPlugins (pluginDir) {
    const pluginList = fs.readdirSync(pluginDir).filter((item) => {
      return fs.statSync(`${pluginDir}/${item}`).isDirectory()
    })

    for (var i = 0; i < pluginList.length; i++) {
      const pluginPath = `${pluginDir}/${pluginList[i]}`
      this.loadPlugin(pluginPath)
    }
  }

  /**
   * Load plugin via sandbox
   * @param {*} pluginPath 
   */
  loadPlugin (pluginPath) {
    const PluginInstance = require(pluginPath)
    const plugin = new PluginInstance(this._client)
    this._plugins[plugin.getName()] = plugin
    this._client.logger.log(`Plugin ${plugin.getName()} loaded`, 'info')
  }

  /**
   * Initialize plugins
   */
  initializePlugins () {
    Object.keys(this._plugins).forEach((plugin) => {
      this._client.http.loadPluginRoutes(this._plugins[plugin])
    })
  }
}

module.exports = PluginHandler
