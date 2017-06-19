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
		client.logger.log(`Cloud G-code ${gcodeFileName} was already downloaded before`, 'info')
    return callback(null, info)
  }).catch((err) => {
    if (err.name === 'fileNotFound') {

			// log
	    client.logger.log(`Cloud G-code ${gcodeFileName} was not downloaded before, downloading...`, 'info')

			// emit download start event
			client.events.emit('cloud.downloadStarted', {
				title: 'Downloading G-code from cloud',
				message: `The G-code file ${gcodeFileName} is being downloaded from Formide`
			})

    	// create download stream
      const downloadStream = request.get(`${client.config.cloud.gcodeDownloadURL}/files/download/gcode?hash=${gcode}`, { strictSSL: false })

    	// handle download error
    	downloadStream.on('error', (err) => {

				// log
    		client.logger.log(`Cloud G-code (${gcode}) has failed to download`, 'warn')

				// emit downlaod error event
    		client.events.emit('cloud.downloadError', {
    			title: `Cloud G-code has failed to download`,
    			message: err.message
    		})

				// catch offline error
    		if (err && err.code === 'ECONNREFUSED') return callback(new Error('Could not connect to server'))

    		return callback(err)
    	})
	
	    // write to local storage
	    client.storage.write(gcodeFileName, downloadStream).then((info) => {

				// log
		    client.logger.log(`Cloud G-code ${gcode} has finished downloading`, 'info')

				// emit download finished event
		    client.events.emit('cloud.downloadSuccess', {
			    title: `Cloud G-code has finished downloading`,
			    message: 'The G-code was downloaded and is now ready to be printed',
			    data: info
		    })

		    return callback(null, info)

	    }).catch((err) => {

				// log
		    client.logger.log(`Cloud G-code (${gcode}) has failed to store`, 'warn')
				console.log('write error', err)

				// emit download error event
		    client.events.emit('cloud.downloadError', {
			    title: `Cloud G-code has failed to download`,
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
