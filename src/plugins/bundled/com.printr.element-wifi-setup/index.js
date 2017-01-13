/**
* @Author: chris
* @Date:   2017-01-06T13:58:19+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-10T20:20:01+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const path = require('path')
const pkg = require('./package.json')

class WifiSetup extends global.Plugin {

  constructor (client) {
    super(client, pkg)
    this.injectInterface()
  }

  injectInterface () {
    this._client.http.app.get('/setup', function (req, res) {
      res.sendFile(path.resolve(__dirname, 'www/index.html'))
    })
    this._client.http.app.get('/setup/assets/*', function (req, res) {
      res.sendFile(req.params[0], { root: path.resolve(__dirname, 'www/assets') })
    })
  }
}

module.exports = WifiSetup
