'use strict'

const fs = require('fs')
const fsExtra = require('fs-extra')
const path = require('path')
const filesToHide = ['.', '..', '.DS_Store']

class Storage {

	constructor (client) {
		this.gcodeDir = client.config.paths.gcodeDir
		this.diskSpace = require('./diskSpace')(client)
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
					const gcodeStoragePath = path.resolve(self.gcodeDir, file)
					const info = fs.statSync(gcodeStoragePath)
					if (filesToHide.indexOf(file) === -1) {
						return {
							filename: file,
							filesize: info.size,
							path: gcodeStoragePath,
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
				path: gcodeStoragePath,
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

        // get full storage paths
				let gcodeStoragePath = path.resolve(this.gcodeDir, filename)
        let tmpStoragePath = path.resolve('/tmp', filename)

				// check if exists, if so we put the date behind the filename
				if (fs.existsSync(gcodeStoragePath)) {
					gcodeStoragePath = gcodeStoragePath.replace('.gcode', `-${new Date().getTime()}.gcode`)
				}

        // clear tmp storage path if already use
        if (fs.existsSync(tmpStoragePath)) {
          fs.unlinkSync(tmpStoragePath)
        }

        // create write stream and pipe file into it
				const writeStream = fs.createWriteStream(tmpStoragePath)
				readStream.pipe(writeStream)

				// done uploading
				writeStream.on('close', () => {

          // move the file from /tmp to storage location
          try {
          	// we need fsExtra to properly handle non-atomic moving (from one partition to another)
          	fsExtra.moveSync(tmpStoragePath, gcodeStoragePath, { overwrite: true })
          } catch (e) {
            return reject(e)
          }

          // return uploaded file stats
					self.stat(gcodeStoragePath.split('/').pop()).then(resolve, reject)
				})

				// catch upload errors
				writeStream.on('error', (err) => {

          // remove the file when an error occurred to make sure we don't leave broken g-codes on disk
          try {
            fs.unlinkSync(tmpStoragePath)
          } catch (e) {
            return reject(e)
          }

          // reject
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
    const self = this
		return new Promise((resolve, reject) => {
      const gcodeStoragePath = path.resolve(self.gcodeDir, filename)

			// check if file exists
			if (!fs.existsSync(gcodeStoragePath)) {
				const fileNotFoundError = new Error('There was no file with this name found in storage')
				fileNotFoundError.name = 'fileNotFound'
				return reject(fileNotFoundError)
			}

			try {
				fs.unlinkSync(gcodeStoragePath)
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
	getDiskSpace () {
		return this.diskSpace().getDiskSpace()
	}
}

module.exports = Storage
