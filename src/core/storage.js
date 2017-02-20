'use strict'

const fs = require('fs')
const diskSpace = require('./utils/diskSpace')
const filesToHide = ['.', '..', '.DS_Store']

class Storage {
	
	constructor (client) {
		this.gcodeDir = client.config.paths.gcodeDir
	}
	
	/**
	 * List files in gcode storage directory
	 * @returns {Promise}
	 */
	list () {
		const self = this
		return new Promise((resolve, reject) => {
			fs.readdir(self.gcodeDir, (err, files) => {
				if (err) return reject(err)
				
				const response = files.filter((file) => {
					return (filesToHide.indexOf(file) === -1)
				}).map((file) => {
					const info = fs.statSync(self.gcodeDir + '/' + file)
					if (filesToHide.indexOf(file) === -1) {
						return {
							filename: file,
							filesize: info.size,
							createdAt: new Date(info.ctime),
							updatedAt: new Date(info.mtime)
						}
					}
				})
				
				return resolve(response)
			})
		})
	}
	
	stats () {
		
	}
	
	read () {
		
	}
	
	write () {
		
	}
	
	remove () {
		
	}
}

module.exports = Storage
