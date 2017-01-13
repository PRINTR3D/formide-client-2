/**
* @Author: chris
* @Date:   2017-01-10T20:17:26+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-13T16:46:45+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const path = require('path')
const pkg = require('./package.json')

class PluginManager extends global.Plugin {
  constructor (client) {
    super(client, pkg)

    client.http.app.get('/plugins', function (req, res) {
      res.sendFile(req.params[0] || 'index.html', { root: path.resolve(__dirname, 'www') })
    })
  }

  getWebRoot () {
    return path.resolve(__dirname, 'www')
  }
}

module.exports = PluginManager
