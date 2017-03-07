'use strict'

module.exports = function insufficientStorage (message, error) {
	var res = this.res
	var statusCode = 507
	var statusName = 'Insufficient Storage'
	
	// Set status code
	res.status(statusCode)
	
	if (process.env.NODE_ENV === 'production') {
		error = undefined
	}
	
	return res.json({
		statusCode: statusCode,
		statusName: statusName,
		message: message,
		error: error
	})
}
