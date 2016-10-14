'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

// Globals
global.MONGO_ID_FIELD = '_id';
var Globals = require('./src/core/globals');

// Load logger
const logger = require('./src/utils/logger');
Globals.log = logger;

// Load configuration
const env = process.env.NODE_ENV || 'production';
var config;

try {
    config = require(`./config/${env}.json`);
    Globals.config = config; // add config to Globals
}
catch (e) {
    Globals.log(`No config found for environment ${env}, exiting application...`, 1, 'error')
    process.exit(1);
}

// Log Formide logo when starting application
require('./src/utils/logo');

// Check if needed directories exist
const checkDirectories = require('./src/utils/checkDirectories');
checkDirectories();

// Create new Client instance
const Client = require('./src/core/client');
const client = new Client(config);