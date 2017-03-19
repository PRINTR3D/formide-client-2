'use strict'

/**
 * Handle exceptions
 * @param error
 */
function handleException (error) {
	console.error((new Date).toUTCString() + ' uncaughtException:', error.message)
	console.error(error.stack);
	
	if (error.message.indexOf('ECONNRESET') > -1) {
		console.error('Caught ECONNRESET, not exiting...')
	} else {
		process.exit(1)
	}
}

module.exports = handleException