/**
* @Author: chris
* @Date:   2017-01-13T15:49:09+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-13T16:34:09+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const debug = require('debug')('plugin:com.printr.element-debug-logger')
const pkg = require('./package.json')
const sliceFile = require('slice-file')
// const LOG_FILE = '/data/logs/daemon.log'
const LOG_FILE = '/var/log/system.log'

class DebugLogger extends global.Plugin {

  constructor (client) {
    super(client, pkg)

    try {
      this.logFile = sliceFile(LOG_FILE)
    } catch (e) {
      console.log(e)
    }
  }

  getApi (router) {
    router.get('/tail', function (req, res) {
      const limit = req.query.limit || 100
      debug(`requesting ${limit} lines of log file ${LOG_FILE}`)
      if (!this.logFile) return res.notImplemented(`Log file ${LOG_FILE} not found, are you running on The Element?`)
      this.logFile.slice(-limit).pipe(res)
    }.bind(this))

    return router
  }
}

module.exports = DebugLogger
