/**
* @Author: chris
* @Date:   2017-01-07T21:46:37+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T22:12:09+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const Plugin = global.Plugin
const pkg = require('./package.json')
const VirtualPrinter = require('./virtualPrinter')

class VirtualPrinterPlugin extends Plugin {
  constructor (client) {
    super(client, pkg)
    this.startVirtualPrinter()
  }

  startVirtualPrinter () {
    const virtualPrinter = new VirtualPrinter(this._client, '/dev/virt0')
    this._client.drivers.printerConnected(virtualPrinter)
    this.virtualPrinter = virtualPrinter
  }

  getApi (router) {
    router.get('/status', function (req, res) {
      this.virtualPrinter.setStatus(req.query.status)
      return res.ok({ message: `Status changed to ${req.query.status}` })
    }.bind(this))

    return router
  }
}

module.exports = VirtualPrinterPlugin
