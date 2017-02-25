'use strict'

module.exports = function api (plugin, router) {

  /**
   * @api {get} /plugins/com.printr.gpio-control-mode/api/mode GPIO:mode
   * @apiGroup Plugin:GPIO
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
   * @api {post} /plugins/com.printr.gpio-control-mode/api/mode GPIO:switch
   * @apiGroup Plugin:GPIO
   * @apiDescription Set the GPIO control mode to switch between integration and host
   * @apiVersion 2.0.0
   * @apiHeader {String} Authentication Valid Bearer JWT token
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
   * @api {post} /plugins/com.printr.gpio-control-mode/api/enable GPIO:enable
   * @apiGroup Plugin:GPIO
   * @apiDescription Enable the GPIO control mode to receive USB plug events over WS
   * @apiVersion 2.0.0
   * @apiHeader {String} Authentication Valid Bearer JWT token
   */
  router.post('/enable', plugin._client.http.checkAuth.jwt, function (req, res) {
    plugin.enableControlMode(function (err) {
      if (err) return res.notImplemented(err.message)
      return res.ok({ message: 'Control mode switching events enabled' })
    })
  })

  return router
}
