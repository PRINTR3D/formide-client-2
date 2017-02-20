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

  /**
   * @api {post} /plugins/com.printr.gpio-control-mode/api/mode Set GPIO mode
   * @apiGroup GPIO
   * @apiDescription Set the GPIO control mode to switch between integration and host
   * @apiVersion 2.0.0
   */
  router.post('/mode', function (req, res) {
    req.checkParams(['mode'])
    plugin.setControlMode(req.body.mode, function (err, response) {
      if (err) return res.notImplemented(err.message)
      if (!response) return res.notFound('Control mode could not be changed')
      return res.ok({ message: 'Control mode updated', response })
    })
  })

  /**
   * @api {post} /plugins/com.printr.gpio-control-mode/api/enable Enable GPIO control
   * @apiGroup GPIO
   * @apiDescription Enable the GPIO control mode to receive USB plug events over WS
   * @apiVersion 2.0.0
   */
  router.post('/enable', function (req, res) {
    plugin.enableControlMode(function (err) {
      if (err) return res.notImplemented(err.message)
      return res.ok({ message: 'Control mode switching events enabled' })
    })
  })

  return router
}
