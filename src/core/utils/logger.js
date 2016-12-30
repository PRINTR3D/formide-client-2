/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: logger.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:34:12+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const LEVEL = process.env.CLIENT_LOG_LEVEL || 1
const assert = require('assert')
const moment = require('moment')
const clc = require('cli-color')

const colorMap = {
  info: clc.blue,
  warn: clc.yellow,
  error: clc.red.bold,
  log: clc.white
}

/**
 * Simple logging function that adds timestamps, allows log leveling and adds some color
 * @param message
 * @param level
 * @param type
 */
function log (message, level, type) {
  assert(message, 'message is required to log something')
  level = level || 1
  type = type || 'log'

  const humanTimestamp = moment().format('HH:mm:ss.SSS')

  if (level <= LEVEL) {
    console.log(clc.white(humanTimestamp) + ' ' + colorMap[type](message))
  }
}

module.exports = log
