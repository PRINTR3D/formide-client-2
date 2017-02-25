'use strict'

const pkg = require('./package.json')
const api = require('./api')

class UsbDrives extends Plugin {
	
	constructor (client) {
		super(client, pkg)
	}
	
	getApi (router) {
		return api(this, router)
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
		const self = this
		self._client.storage.diskSpace.hasSpaceLeft().then(() => {
			// TODO
			// self._client.storage.write().then(() => {})
		}).catch((err) => {
			// TODO
		})
	}
}

module.exports = UsbDrives
