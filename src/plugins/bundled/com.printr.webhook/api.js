/**
* @Author: chris
* @Date:   2017-01-01T18:40:34+01:00
* @Filename: api.js
* @Last modified by:   chris
* @Last modified time: 2017-01-03T11:22:28+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = function api (plugin, router) {
  // do search
  router.get('/search', function (req, res) {
    if (plugin._settings.api.enableSearch) {
      res.ok('search enabled')
    } else {
      res.notImplemented('search disabled')
    }
  })

  // list registered hooks
  router.get('/hooks', function (req, res) {
    plugin.webhooks.find().then(function (webhooks) {
      res.ok(webhooks)
    }).catch(res.serverError)
  })

  // add hook
  router.post('/hook', function (req, res) {
    plugin.webhooks.create({
      name: req.body.name,
      url: req.body.url,
      events: req.body.url
    }).then(function (webhook) {
      res.ok({
        message: 'Webhook created',
        webhook
      })
    }).catch(res.serverError)
  })

  // delete hook
  router.delete('/hook/:id', function (req, res) {
    plugin.webhooks.destroy({ [global.MONGO_ID_FIELD]: req.params.id }).then(function () {
      res.ok({
        message: 'Webhook deleted'
      })
    }).catch(res.serverError)
  })

  return router
}
