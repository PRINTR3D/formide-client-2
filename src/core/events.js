/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: events.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:33:10+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const EventEmitter2 = require('eventemitter2').EventEmitter2
const events = new EventEmitter2({
  wildcard: true,
  maxListeners: 100
})

module.exports = events
