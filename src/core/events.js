'use strict'

const EventEmitter2 = require('eventemitter2').EventEmitter2
const events = new EventEmitter2({
  wildcard: true,
  maxListeners: 100
})

module.exports = events
