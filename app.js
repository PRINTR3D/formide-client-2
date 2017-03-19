'use strict'

const os = require('os') // TMP!
const debug = require('debug')('app:boot')

debug('booting...')

// Load version
const version = require('./package.json').version

// Load configuration
const env = process.env.NODE_ENV || 'production'
var config

// catch buggy Node.js errors
const handleException = require('./src/core/utils/catchEconnResetError')
process.on('uncaughtException', handleException)

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
client.logger.log('Boot time: ' + process.uptime(), 'debug')
client.logger.log('OS uptime: ' + os.uptime(), 'debug')

// client.plugins.loadPlugin(`${__dirname}/test/plugins/com.printr.virtual-printer`)

module.exports = client
