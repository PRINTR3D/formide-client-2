/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: logger.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T20:01:25+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const moment = require('moment')
const clc = require('cli-color')

const logLevels = [
  {
    type: 'critical',
    color: clc.redBright.bold
  },
  {
    type: 'error',
    color: clc.red
  },
  {
    type: 'warning',
    color: clc.yellow
  },
  {
    type: 'info',
    color: clc.cyanBright
  },
  {
    type: 'debug',
    color: clc.blue
  },
  {
    type: 'any',
    color: clc.white
  }
]

class Logger {
  constructor (client) {
    this._client = client
  }

  log (message, type) {
    assert(message, 'message is required to log something')

    type = type || 'any'
    let logLevel = logLevels.map(function (level) {
      return level.type
    }).indexOf(type)
    if (logLevel === -1) logLevel = this._client.config.log.level

    const humanTimestamp = moment().format('HH:mm:ss.SSS')

    if (logLevel <= this._client.config.log.level) {
      console.log(clc.white(humanTimestamp) + ' ' + logLevels[logLevel].color(message))
    }
  }
}

module.exports = Logger
