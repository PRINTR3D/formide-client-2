'use strict'

const path = require('path')
const pkg = require('./package.json')
const VirtualPrinter = require('./virtualPrinter')

class VirtualPrinterPlugin extends Plugin {
  constructor (client) {
    super(client, pkg)
    this._client = client
    this.startVirtualPrinter()
  }

  startVirtualPrinter () {
    const virtualPrinter = new VirtualPrinter(this._client, '/dev/virt0')
    this._client.drivers.printerConnected(virtualPrinter)
    this.virtualPrinter = virtualPrinter
  }

  getApi (router) {
    
    /**
     * @api {get} /plugins/com.printr.virtual-printer/api/status VirtualPrinter:status
     * @apiGroup Plugin:VirtualPrinter
     * @apiDescription Set the status of virtual printer
     * @apiVersion 2.0.0
     *
     * @apiParam {String=online,printing,paused,stopping,heating,offline} status Status to set the printer to
     */
    router.post('/status', function (req, res) {
      this.virtualPrinter.setStatus(req.body)
      return res.ok({ message: `Status changed to ${req.body.status}` })
    }.bind(this))

    return router
  }

  getWebRoot () {
    return path.resolve(__dirname, 'www')
  }
}

module.exports = VirtualPrinterPlugin
