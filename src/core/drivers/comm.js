/**
* @Author: chris
* @Date:   2016-12-18T17:10:55+01:00
* @Filename: comm.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:33:46+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const crypto = require('crypto')
const path = require('path')
const fork = require('child_process').fork

/**
 * Comm function that interacts with forked driver thread
 */
function comm (client) {
  // this is our forked driver thread
  const driver = fork(path.join(__dirname, 'thread.js'))

  // when client process stops, also kill driver process
  process.on('exit', function () {
    driver.kill()
  })

  // handle driver process exit
  driver.on('exit', function (code, signal) {
    client.log(`[drivers] - Process exiting because driver fork crashed, ${code}, ${signal}`, 1, 'error')
    process.exit(code)
  })

  // handle driver process error
  driver.on('error', function (err) {
    client.log(err, 1, 'warn')
  })

  // hold callbacks in here
  var callbacks = {}

  /**
   * Listen to driver events
   * @param callback
   */
  function on (callback) {
    driver.on('message', function (message) {
      if (!message.type) {
        callback(new Error('Driver message has incorrect format'))
      } else if (message.type === 'started') {
        client.log('[drivers] - Formide driver started successfully in separate thread', 1, 'info')
      } else if (message.type === 'error' && message.data) {
        client.log(`[drivers] - Driver error: ${message.data}`, 1, 'warn')
      } else if (message.type === 'event' && message.data) {
        callback(null, message.data)
      } else if (message.type === 'callback' && message.callbackId) {
        if (callbacks[message.callbackId]) {
          callbacks[message.callbackId].apply(null, [message.err, message.result])
          delete callbacks[message.callbackId]
        }
      }
    })
  }

  /**
   * Send message and handle callback
   * @param method
   * @param data
   * @param callback
   * @private
   */
  function _sendWithCallback (method, data, callback) {
    const callbackId = crypto.randomBytes(64).toString('hex')
    driver.send({ method, callbackId, data })
    callbacks[callbackId] = callback

    // wait for callback
    setTimeout(function () {
      if (callbacks[callbackId]) {
        callback(new Error('timeout'))
        delete callbacks[callbackId]
      }
    }, 5000)
  }

  /**
   * Send gcode command
   * @param gcodeCommand
   * @param serialPortPath
   * @param callback
   * @returns {*}
   */
  function sendGcode (gcodeCommand, serialPortPath, callback) {
    return _sendWithCallback('sendGcode', [gcodeCommand, serialPortPath], callback)
  }

  /**
   * Send tune command
   * @param gcodeCommand
   * @param serialPortPath
   * @param callback
   * @returns {*}
   */
  function sendTuneGcode (gcodeCommand, serialPortPath, callback) {
    return _sendWithCallback('sendTuneGcode', [gcodeCommand, serialPortPath], callback)
  }

  /**
   * Print a file from disk
   * @param fileName
   * @param printjobId
   * @param serialPortPath
   * @param callback
   */
  function printFile (fileName, printjobId, serialPortPath, callback) {
    return _sendWithCallback('printFile', [fileName, printjobId, serialPortPath], callback)
  }

  /**
   * Get list of all printers
   * @param callback
   */
  function getPrinterList (callback) {
    return _sendWithCallback('getPrinterList', [], callback)
  }

  /**
   * Get printer info by port name
   * @param serialPortPath
   * @param callback
   */
  function getPrinterInfo (serialPortPath, callback) {
    return _sendWithCallback('getPrinterInfo', [serialPortPath], callback)
  }

  /**
   * Pause print
   * @param serialPortPath
   * @param callback
   */
  function pausePrint (serialPortPath, callback) {
    return _sendWithCallback('pausePrint', [serialPortPath], callback)
  }

  /**
   * Resume print
   * @param serialPortPath
   * @param callback
   */
  function resumePrint (serialPortPath, callback) {
    return _sendWithCallback('resumePrint', [serialPortPath], callback)
  }

  /**
   * Stop print
   * @param serialPortPath
   * @param stopGcode
   * @param callback
   */
  function stopPrint (serialPortPath, stopGcode, callback) {
    return _sendWithCallback('stopPrint', [serialPortPath, stopGcode], callback)
  }

  // return functions
  return {
    on,
    sendGcode,
    sendTuneGcode,
    printFile,
    getPrinterList,
    getPrinterInfo,
    pausePrint,
    resumePrint,
    stopPrint
  }
}

module.exports = comm
