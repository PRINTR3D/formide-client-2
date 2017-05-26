'use strict'

// packages
const fs = require('fs')
const path = require('path')
const SandboxedModule = require('sandboxed-module')
const vm = require('vm')

class PluginHandler {
  constructor (client) {
    this._client = client
    this._plugins = {}

    // load system plugins on The Element
    if (client.system.OS_IMPLEMENTATION === 'the_element') {
      this.loadPlugins(path.resolve('/opt/plugins'))
    }

    // load user plugins
    this.loadPlugins(path.resolve(client.config.paths.pluginDir))
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
    vm.runInNewContext()

    const Plugin = SandboxedModule.require(pluginPath, {
      globals: {
        Plugin: require('./plugin'),
        Client: this._client,
        Printer: require('../core/drivers/printers/printer'),
        MONGO_ID_FIELD: global.MONGO_ID_FIELD
      }
    })

    const plugin = new Plugin(this._client)
    this._plugins[plugin.getName()] = plugin
    this._client.http.loadPluginRoutes(plugin)
    this._client.logger.log(`Plugin ${plugin.getName()} loaded`, 'info')
  }
}

module.exports = PluginHandler
