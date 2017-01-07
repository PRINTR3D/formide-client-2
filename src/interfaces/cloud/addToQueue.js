/**
* @Author: chris
* @Date:   2016-12-17T13:55:16+01:00
* @Filename: addToQueue.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T16:06:58+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const fs = require('fs')
const path = require('path')
// const assert = require('assert')
const crypto = require('crypto')
const request = require('request')
const Throttle = require('throttle')
// const Globals = require('../../core/globals')

/**
 * Add an item to the print queue from Formide Cloud
 * @param events
 * @param db
 * @param data
 * @param callback
 */
function addToQueue (client, data, callback) {
  const hash = crypto.randomBytes(16).toString('hex')

  db.QueueItem
        .create({
          origin: 'cloud',
          status: 'downloading',
          gcode: hash,
          printJob: data.printJob,
          port: data.port
        })
        .then(function (queueItem) {
          callback(null, {
            success: true,
            queueItem: queueItem
          })

          const gcodeStoragePath = path.join(client.config.paths.gcodeDir, hash)
          const writeStream = fs.createWriteStream(gcodeStoragePath)

            // Throttle G-code download to 10MBps to prevent clogging network connection
          const throttle = new Throttle(10000000)

          request
                .get(`${client.config.cloud.URL}/files/download/gcode?hash=${data.gcode}`, { strictSSL: false })
                .on('error', function (err) {
                  client.logger.log(`${data.printJob.name} has failed to download`, 'warn')
                  client.events.emit('queueItem.downloadError', {
                    title: `${data.printJob.name} has failed to download`,
                    message: err.message
                  })
                })
                .pipe(throttle)
                .pipe(writeStream)
                .on('finish', function () {
                  client.logger.log(`${data.printJob.name} has finished downloading`, 'info')

                  queueItem.status = 'queued'
                  queueItem.save(function () {
                    client.events.emit('queueItem.downloaded', {
                      title: `${data.printJob.name} has finished downloading`,
                      message: 'The gcode was downloaded and is now ready to be printed'
                    })
                  })
                })
        })
        .catch(function (err) {
          client.logger.log(`${err.message}`, 'error')
          return callback(err)
        })
}

module.exports = addToQueue
