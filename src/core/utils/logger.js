/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: logger.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T16:00:43+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const LEVEL = process.env.CLIENT_LOG_LEVEL || 5
const assert = require('assert')
const moment = require('moment')
const clc = require('cli-color')

const logLevels = [
  {
    type: 'critical',
    color: clc.red.bold
  },
  {
    type: 'error',
    color: clc.orange
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

/**
 * Simple logging function that adds timestamps, allows log leveling and adds some color
 * @param message
 * @param level
 * @param type
 */
function log (message, type) {
  assert(message, 'message is required to log something')

  type = type || 'any'
  let logLevel = logLevels.map(function (level) {
    return level.type
  }).indexOf(type)
  if (logLevel === -1) logLevel = LEVEL

  const humanTimestamp = moment().format('HH:mm:ss.SSS')

  if (logLevel <= LEVEL) {
    console.log(clc.white(humanTimestamp) + ' ' + logLevels[logLevel].color(message))
  }
}

module.exports = log
