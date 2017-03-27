'use strict'

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const request = require('request')

/**
 * Download a G-code file from Formide to print it
 * @param client
 * @param data
 * @param callback
 */
function downloadGcodeFromCloud (client, gcode, callback) {
	const gcodeFileName = gcode + '.gcode' // create new local file with name of G-code

  // if the file already exists, use it, otherwise download it from the cloud
  client.storage.stat(gcodeFileName).then((info) => {
    return callback(null, info)
  }).catch((err) => {
    if (err.name === 'fileNotFound') {
    	
    	console.log('Debug', `Trying to download ${gcode}`)

      const downloadStream = request.get(`${client.config.cloud.gcodeDownloadURL}/files/download/gcode?hash=${gcode}`, { strictSSL: false })

    	// handle download error
    	downloadStream.on('error', (err) => {
    		client.logger.log(`${gcode} has failed to download`, 'warn')
		    console.log('download error', err)
    		client.events.emit('cloud.downloadError', {
    			title: `${gcode} has failed to download`,
    			message: err.message
    		})
    		if (err && err.code === 'ECONNREFUSED') return reject(new Error('Could not connect to server'))
    		return callback(err)
    	})

    	// write to local storage
    	client.storage.write(gcodeFileName, downloadStream).then((info) => {
    		client.logger.log(`${gcode} has finished downloading`, 'info')
    		client.events.emit('cloud.downloaded', {
    			title: `${gcode} has finished downloading`,
    			message: 'The gcode was downloaded and is now ready to be printed',
    			data: info
    		})
    		return callback(null, info)
    	}).catch((err) => {
    		client.logger.log(`${gcode} has failed to download`, 'warn')
    		client.events.emit('cloud.downloadError', {
    			title: `${gcode} has failed to download`,
    			message: err.message
    		})
    		return callback(err)
    	})

    } else {
      return callback(err)
    }
  })
}

module.exports = downloadGcodeFromCloud
