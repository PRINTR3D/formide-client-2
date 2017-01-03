/**
* @Author: chris
* @Date:   2017-01-01T13:02:11+01:00
* @Filename: webhook.js
* @Last modified by:   chris
* @Last modified time: 2017-01-03T11:18:44+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

// modules
const Plugin = require('../plugin')
const WebhookModel = require('./webhookModel')
const api = require('./api')
const settingsForm = require('./settings')
const pkg = require('./package.json')

class Webhook extends Plugin {

  constructor (client) {
    super(client, pkg.name, {
      version: pkg.version
    })

    this.webhooks = WebhookModel
  }

  getSettingsForm () {
    return settingsForm
  }

  getApi (router) {
    return api(this, router)
  }
}

module.exports = Webhook
