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
			const gcodeStoragePath = path.resolve(this.gcodeDir, filename)
			
			// check if file exists
			if (!fs.existsSync(gcodeStoragePath)) {
				const fileNotFoundError = new Error('There was no file with this name found in storage')
				fileNotFoundError.name = 'fileNotFound'
				return reject(fileNotFoundError)
			}
			
			// stat file and return
			const info = fs.statSync(gcodeStoragePath)
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
		return new Promise((resolve, reject) => {
			const gcodeStoragePath = path.resolve(this.gcodeDir, filename)
			
			// check if file exists
			if (!fs.existsSync(gcodeStoragePath)) {
				const fileNotFoundError = new Error('There was no file with this name found in storage')
				fileNotFoundError.name = 'fileNotFound'
				return reject(fileNotFoundError)
			}
			
			const readStream = fs.createReadStream(gcodeStoragePath)
			return resolve(readStream)
		})
	}
	
	/**
	 * Create a new write stream to store G-code
	 * @param gcodeStoragePath
	 */
	write (filename) {
		return new Promise((resolve, reject) => {
			const fileExt = path.extname(filename)
			if (fileExt.toLowerCase() !== '.gcode') {
				const invalidFiletypeError = new Error('File must be of type .gcode')
				invalidFiletypeError.name = 'invalidFiletype'
				return reject(invalidFiletypeError)
			}
			const gcodeStoragePath = path.resolve(this.gcodeDir, filename)
			const writeStream = fs.createWriteStream(gcodeStoragePath)
			return resolve(writeStream)
		})
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
