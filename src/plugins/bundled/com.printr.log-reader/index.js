'use strict'

const pkg = require('./package.json')
const api = require('./api')

class LogReader extends Plugin {
	
	constructor (client) {
		super(client, pkg)
	}
	
	getApi (router) {
		return api(this, router)
	}
}

module.exports = LogReader
