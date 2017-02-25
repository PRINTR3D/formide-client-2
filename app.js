'use strict'

const debug = require('debug')('app:boot')

debug('booting...')

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

debug('finished booting', process.uptime())

module.exports = client
