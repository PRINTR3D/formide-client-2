/**
* @Author: chris
* @Date:   2017-01-10T20:17:26+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-11T17:02:16+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const path = require('path')
const pkg = require('./package.json')

class PluginManager extends Plugin {
  constructor (client) {
    super(client, pkg)
  }

  getWebRoot () {
    return path.resolve(__dirname, 'www')
  }
}

module.exports = PluginManager
