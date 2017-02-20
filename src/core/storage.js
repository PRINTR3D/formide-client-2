'use strict'

const fs = require('fs')
const diskSpace = require('./utils/diskSpace')
const gcodeDir = require('./utils/directories').getPaths().gcodeDir

/**
 * List files in gcode storage directory
 * @returns {Promise}
 */
function list () {
	return new Promise((resolve, reject) => {
		fs.readdir(gcodeDir, (err, files) => {
			if (err) return reject(err)
			
			const response = files.map((file) => {
				try {
					const info = fs.statSync(gcodeDir + '/' + file)
					return {
						filename: file,
						filesize: info.size,
						createdAt: new Date(info.ctime),
						updatedAt: new Date(info.mtime)
					}
				} catch (e) {
					return reject(e)
				}
			})
			
			return resolve(response)
		})
	})
}

function exists () {
	
}

function read () {
	
}

function write () {
	
}

function remove () {
	
}

module.exports = {
	list,
	exists,
	read,
	write,
	remove
}