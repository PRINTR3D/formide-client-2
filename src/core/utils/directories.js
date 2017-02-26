'use strict'

const fs = require('fs')
const path = require('path')

// storage directories
const storageDir = path.join(getHomeDirectory(), 'formide')
const logsDir = path.join(storageDir, './logs')
const gcodeDir = path.join(storageDir, './gcode')
const pluginDir = path.join(storageDir, './plugins')

/**
 * Return an object containing the used system paths
 */
function getPaths () {
  return { storageDir, logsDir, gcodeDir, pluginDir }
}

/**
 * This function checks if all directories that formide-client needs are available.
 * If needed, directories are created an populated with default files.
 */
function checkDirectories () {
  createWhenNotExisting(storageDir)
  createWhenNotExisting(logsDir)
  createWhenNotExisting(gcodeDir)
	createWhenNotExisting(pluginDir)
}

/**
 * Create a directory when it doesn't exist
 * @param dirname
 */
function createWhenNotExisting (dirname) {
  if (!fs.existsSync(dirname)) {
    console.log(`Creating ${dirname}...`)
    fs.mkdirSync(dirname)
  }
}

/**
 * Depending on platform return correct home directory
 * @returns {*}
 */
function getHomeDirectory () {
  if (process.platform === 'win32') {
    return process.env.USERPROFILE
  }
  return process.env.HOME
}

module.exports = { getPaths, checkDirectories, getHomeDirectory }
