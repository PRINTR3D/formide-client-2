'use strict'

const fs = require('fs')
const path = require('path')
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
					const info = fs.statSync(path.resolve(self.gcodeDir, file))
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
	
	/**
	 * Get info about a single file
	 * @param filename
	 * @returns {Promise}
	 */
	stat (filename) {
		return new Promise((resolve, reject) => {
			const info = fs.statSync(path.resolve(this.gcodeDir, filename))
			return resolve({
				filename: filename,
				filesize: info.size,
				createdAt: new Date(info.ctime),
				updatedAt: new Date(info.mtime)
			})
		})
	}
	
	/**
	 * Create a new read stream to download G-code
	 * @param filename
	 */
	read (filename) {
		const gcodeStoragePath = path.resolve(this.gcodeDir, filename)
		const readStream = fs.createReadStream(gcodeStoragePath)
		return readStream
	}
	
	/**
	 * Create a new write stream to store G-code
	 * @param gcodeStoragePath
	 */
	write (filename) {
		const gcodeStoragePath = path.resolve(this.gcodeDir, filename)
		const writeStream = fs.createWriteStream(gcodeStoragePath)
		return writeStream
	}
	
	/**
	 * Remove a file from storage
	 * @param filename
	 * @returns {Promise}
	 */
	remove (filename) {
		return new Promise((resolve, reject) => {
			try {
				fs.unlinkSync(filename)
				return resolve()
			} catch (e) {
				return reject(e)
			}
		})
	}
}

module.exports = Storage
