'use strict'

const os = require('os')
const fs = require('fs')

function determineDevice () {
	
	const osType = os.type()
	
	// check which OS
	if (osType === 'Darwin') {
		process.env.OS_IMPLEMENTATION = 'mac_os'
	} else if (osType === 'Linux') {
		
		// check if it's a Raspberry Pi
		try {
			const osRelease = fs.readFile('/etc/os-release')
			if (osRelease.indexOf('raspbian') > -1) {
				process.env.OS_IMPLEMENTATION = 'raspberry_pi'
			}
		} catch (e) {
			console.info('Could not parse /etc/os-release, probably not running on Raspberry Pi...')
		}
		
		
	} else if (osType === 'Windows_NT') {
		console.warn('Formide client does currently not support Windows, exiting...')
		process.exit(0)
	}
}

module.exports = determineDevice
