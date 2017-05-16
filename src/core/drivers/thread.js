'use strict'

/**
 * This thread file separates the driver process from the main client process
 * resulting in smoother communication between connected printers and the rest of the system.
 * Without this structure, printers can stutter when other parts of the client are in use.
 */

const debug = require('debug')('app:driver:fork')

let driver = false

debug('loading binary...')

try {
  driver = require('formide-drivers')
} catch (e) {
  console.log(e.message, 'error')
}

if (driver) {
  driver.start(function (err, started, event) {
    if (err) {
      process.send({type: 'error', data: err})
    } else if (started) {
      debug('binary started')
      process.send({type: 'started', data: started})
    } else if (event) {
      process.send({type: 'event', data: event}) // every time an event comes from the drivers we pass it to the main thread
    } else {
      console.log('wut is dis?')
    }
  })
}

/**
 * Incoming message should contain method, data and callbackId.
 * The callbackId is passed back when the function is done executing
 * so the main thread can process the callback data asynchronously.
 */
process.on('message', function (message) {
  if (message.method && message.data && message.callbackId) {
    message.data.push(function (err, response) {
      process.send({ type: 'callback', callbackId: message.callbackId, err, result: response })
    })

    if (driver) {
      driver[message.method].apply(null, message.data)
    }
  }
})
