'use strict'

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0' // fix for node.js TLS issue

const exec = require('child_process').exec
const fs = require('fs')
const ini = require('ini')
const path = require('path')
const request = require('request')
const updateBaseURL = 'https://factoryservice.formide.com/update'
const fota = 'sudo fota' // custom script on The Element, all sudo actions have to be permitted in sudoers.d/formide

/**
 * Get current version from Element update config
 * @param callback
 */
function getCurrentVersion () {
	return new Promise(function (resolve, reject) {
		exec(`${fota} current`, (err, stdout, stderr) => {
			if (err || stderr) return reject(err || stderr)
			
			var currentVersion
			try {
				currentVersion = ini.parse(stdout)
			} catch (e) {
				return reject(e)
			}
			
			if (!currentVersion.FLAVOUR || !currentVersion.VERSION) return reject(new Error('There was an issue getting current version information'))
			
			return resolve({
				version: currentVersion.VERSION,
				flavour: currentVersion.FLAVOUR,
				date: currentVersion.DATE
			})
		})
	})
}

/**
 * Get resulting status of last update from Element update config
 * @param callback
 */
function getUpdateStatus () {
	return new Promise(function (resolve, reject) {
		exec(`${fota} status`, (err, stdout, stderr) => {
			if (err || stderr) return reject(err || stderr)
			
			var updateStatus
			try {
				updateStatus = ini.parse(stdout)
			} catch (e) {
				return reject(e)
			}
			
			if (!updateStatus.UPDATE_STATUS) return reject(new Error('There was an issue getting update status information'))
			
			if (updateStatus.UPDATE_STATUS === 'success') {
				return resolve({
					success: true,
					timestamp: updateStatus.TIME,
					message: 'The device was successfully updated'
				})
			} else {
				return resolve({
					success: false,
					timestamp: updateStatus.TIME,
					message: updateStatus.UPDATE_ERR
				})
			}
		})
	})
}

function checkForUpdate () {
	return new Promise(function (resolve, reject) {
		getCurrentVersion().then((currentVersion) => {
			
		  
		  
		  
		  // TODO
			// if (!hasUpdate.imageURL || !hasUpdate.signature) return reject(new Error('incomplete update object'))
      
		}).catch(reject)
	})
}

/**
 * Apply the latest available update from Element update config
 * @param callback
 */
function update () {
	return new Promise(function (resolve, reject) {
		checkForUpdate().then((hasUpdate) => {
			exec(`${fota} update ${hasUpdate.imageURL} ${hasUpdate.signature}`), (err, stdout, stderr) => {
				if (err || stderr) return reject(err || stderr)
				return resolve()
			}
		}).catch(reject)
	})
}

module.exports = {
  getCurrentVersion,
  getUpdateStatus,
  checkForUpdate,
  update
}
