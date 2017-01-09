/**
* @Author: chris
* @Date:   2016-12-17T13:52:17+01:00
* @Filename: directories.js
* @Last modified by:   chris
* @Last modified time: 2017-01-09T23:26:17+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const fs = require('fs')
const path = require('path')

// storage directories
const storageDir = path.join(getHomeDirectory(), 'formide')
const dbDir = path.join(storageDir, './db')
const logsDir = path.join(storageDir, './logs')
const filesDir = path.join(storageDir, './modelfiles')
const gcodeDir = path.join(storageDir, './gcode')
const imagesDir = path.join(storageDir, './images')
const settingsDir = path.join(storageDir, './settings')
const pluginDir = path.join(storageDir, './pugins')

/**
 * Return an object containing the used system paths
 */
function getPaths () {
  return { storageDir, dbDir, logsDir, filesDir, gcodeDir, imagesDir, settingsDir, pluginDir }
}

/**
 * This function checks if all directories that formide-client needs are available.
 * If needed, directories are created an populated with default files.
 */
function checkDirectories () {
  createWhenNotExisting(storageDir)
  createWhenNotExisting(dbDir)
  createWhenNotExisting(logsDir)
  createWhenNotExisting(filesDir)
  createWhenNotExisting(gcodeDir)
  createWhenNotExisting(imagesDir)
  createWhenNotExisting(settingsDir)
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
