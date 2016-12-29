'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const EventEmitter2 = require('eventemitter2').EventEmitter2
const events = new EventEmitter2({
  wildcard: true,
  maxListeners: 100
})

module.exports = events
