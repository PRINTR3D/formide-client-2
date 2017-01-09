/**
* @Author: chris
* @Date:   2016-12-17T13:52:00+01:00
* @Filename: app.js
* @Last modified by:   chris
* @Last modified time: 2017-01-10T00:12:05+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const debug = require('debug')('app:boot')

debug('booting...')

// Globals
global.MONGO_ID_FIELD = '_id'
global.Plugin = require('./src/plugins/plugin')
global.Printer = require('./src/core/drivers/printers/printer')

// Load version
const version = require('./package.json').version

// Load configuration
const env = process.env.NODE_ENV || 'production'
var config

try {
  config = require(`./config/${env}.json`)
} catch (e) {
  console.log(`No config found for environment ${env}, exiting application...`)
  process.exit(1)
}

// Check if needed directories exist
const directories = require('./src/core/utils/directories')
directories.checkDirectories()

// finish config
config.env = env
config.version = version
config.paths = directories.getPaths()

// Log Formide logo when starting application
require('./src/core/utils/logo')(config)

// Create new Client instance
const Client = require('./src/core/client')
const client = new Client(config)

debug('finished booting')

module.exports = { client, config }
