'use strict'

class PrinterActionNotAllowed extends Error {
	constructor (port, extra) {
		super()
		Error.captureStackTrace(this, this.constructor)
		this.name = 'printerActionNotAllowed'
		this.message = `You are not allowed to execute this action on ${port}`
		if (extra) this.extra = extra
	}
}

module.exports = PrinterActionNotAllowed
