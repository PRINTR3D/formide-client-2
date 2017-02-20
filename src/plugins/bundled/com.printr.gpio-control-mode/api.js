'use strict'

module.exports = function api (plugin, router) {

  /**
   * @api {get} /plugins/com.printr.gpio-control-mode/api/mode Get GPIO mode
   * @apiGroup GPIO
   * @apiDescription Get current GPIO control mode
   * @apiVersion 2.0.0
   */
  router.get('/mode', function (req, res) {
    plugin.getControlMode(function (err, mode) {
      if (err) return res.notImplemented(err.message)
      if (!mode) return res.notFound('Control mode could not be determined')
      return res.ok({ mode, message: 'Control mode found' })
    })
  })

  // set control mode
  router.post('/mode', function (req, res) {
    req.checkParams(['mode'])
    plugin.setControlMode(req.body.mode, function (err, response) {
      if (err) return res.notImplemented(err.message)
      if (!response) return res.notFound('Control mode could not be changed')
      return res.ok({ message: 'Control mode updated', response })
    })
  })

  // enable control mode switching events over web sockets
  router.post('/enable', function (req, res) {
    plugin.enableControlMode(function (err) {
      if (err) return res.notImplemented(err.message)
      return res.ok({ message: 'Control mode switching events enabled' })
    })
  })

  return router
}
