'use strict'

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0' // fix for node.js TLS issue

const exec = require('child_process').exec
const fs = require('fs')
const ini = require('ini')
const path = require('path')
const network = require('./network')
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

/**
 * Check for an available update on the Element factory server
 * @returns {Promise}
 */
function checkForUpdate () {
	return new Promise(function (resolve, reject) {
		getCurrentVersion().then((currentVersion) => {
			network.mac().then((macAddress) => {
				const checkUpdateURI = `${updateBaseURL}/${currentVersion.flavour}/${currentVersion.version}/${macAddress}`
				request(checkUpdateURI, (err, response, body) => {
					if (err) return reject(err)
					if (response.statusCode !== 200) return reject(new Error('There was an issue getting the latest update information'))
					
					try {
						body = JSON.parse(body)
					} catch (e) {
						return reject(e)
					}
					
					if (!body.hasOwnProperty('hasUpdate')) return reject(new Error('Incomplete update object'))
					
					if (body.hasUpdate) {
						return resolve({
							message: 'Update found',
							needsUpdate: true,
							imageURL: body.imageURL,
							signature: body.signature,
							version: body.version,
							flavour: body.flavour,
							releaseNotesURL: body.releaseNotesURL
						})
					} else {
						return resolve({
							message: 'No update required at the moment',
							needsUpdate: false
						})
					}
				})
				
			}).catch(reject)
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
			if (hasUpdate.needsUpdate) {
				exec(`${fota} update ${hasUpdate.imageURL} ${hasUpdate.signature}`), (err, stdout, stderr) => {
					if (err || stderr) return reject(err || stderr)
					return resolve()
				}
			} else {
				return reject(new Error(hasUpdate.message))
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
