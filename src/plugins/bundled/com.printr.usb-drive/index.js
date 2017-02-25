'use strict'

const pkg = require('./package.json')
const api = require('./api')
const usb = require('./usb')

class UsbDrives extends Plugin {
	
	constructor (client) {
		super(client, pkg)
	}
	
	getApi (router) {
		return api(this, router)
	}
	
	getDrives () {
		return new Promise((resolve, reject) => {
			usb.drives((err, drives) => {
				if (err) return reject(err)
				return resolve(drives)
			})
		})
	}
	
	mountDrive (drive) {
		return new Promise((resolve, reject) => {
			usb.mount(drive, (err, result) => {
				if (err) return reject(err)
				return resolve(result)
			})
		})
	}
	
	unmountDrive (drive) {
		return new Promise((resolve, reject) => {
			usb.drives(drive, (err, result) => {
				if (err) return reject(err)
				return resolve(result)
			})
		})
	}
	
	readDrive (drive, path) {
		return new Promise((resolve, reject) => {
			usb.read(drive, path, (err, files) => {
				if (err) return reject(err)
				return resolve(files)
			})
		})
	}
	
	copyFile (drive, path) {
		const self = this
		return new Promise((resolve, reject) => {
			const readStream = usb.readFile(drive, path)
			self._client.storage.write(path, readStream).then((stats) => {
				return resolve(stats)
			}).catch((err) => {
				return reject(err)
			})
		})
	}
}

module.exports = UsbDrives
