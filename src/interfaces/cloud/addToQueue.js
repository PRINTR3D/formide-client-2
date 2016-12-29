'use strict'

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const fs = require('fs')
const path = require('path')
const assert = require('assert')
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
                  client.log(`[cloud / addToQueue] - ${data.printJob.name} has failed to download`, 1, 'error')
                  client.events.emit('queueItem.downloadError', {
                    title: `${data.printJob.name} has failed to download`,
                    message: err.message
                  })
                })
                .pipe(throttle)
                .pipe(writeStream)
                .on('finish', function () {
                  client.log(`[cloud / addToQueue] - ${data.printJob.name} has finished downloading`, 2, 'info')

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
          client.log(`[cloud / addToQueue] - ${err.message}`, 1, 'error')
          return callback(err)
        })
}

module.exports = addToQueue
