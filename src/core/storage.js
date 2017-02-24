'use strict'

const fs = require('fs')
const path = require('path')
const filesToHide = ['.', '..', '.DS_Store']

class Storage {
	
	constructor (client) {
		this.gcodeDir = client.config.paths.gcodeDir
		this.diskSpace = require('./utils/diskSpace')(client)
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
	write (filename, readStream) {
		const self = this
		return new Promise((resolve, reject) => {
			const fileExt = path.extname(filename)
			
			// check if there is any space left
			self.diskSpace.hasSpaceLeft().then(() => {
				
				// check filetype
				if (fileExt.toLowerCase() !== '.gcode') {
					const invalidFiletypeError = new Error('File must be of type .gcode')
					invalidFiletypeError.name = 'invalidFiletype'
					return reject(invalidFiletypeError)
				}
				
				let gcodeStoragePath = path.resolve(this.gcodeDir, filename)
				
				// check if exists, if so we put the date behind the filename
				if (fs.existsSync(gcodeStoragePath)) {
					gcodeStoragePath = gcodeStoragePath.replace('.gcode', `-${new Date().getTime()}.gcode`)
				}
				
				const writeStream = fs.createWriteStream(gcodeStoragePath)
				readStream.pipe(writeStream)
				
				// done uploading
				writeStream.on('close', () => {
					self.stat(gcodeStoragePath.split('/').pop()).then(resolve, reject)
				})
				
				// catch upload errors
				writeStream.on('error', (err) => {
					return reject(err)
				})
			}).catch((err) => {
				return reject(err)
			})
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
	
	/**
	 * Get amount of disk space remaining
	 * @returns {*}
	 */
	diskSpace () {
		return this.diskSpace().getDiskSpace()
	}
	
	getDrives () {
		
	}
	
	mountDrive () {
		
	}
	
	unmountDrive () {
		
	}
	
	readDrive () {
		
	}
	
	copyFile () {
		this.diskSpace.hasSpaceLeft().then(() => {
			// TODO
		}).catch((err) => {
			// TODO
		})
	}
	
	
}

module.exports = Storage
