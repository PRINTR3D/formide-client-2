'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

// Load configuration
const env = process.env.NODE_ENV || 'production';
var config;

try {
    config = require(`./config/${env}.json`);
}
catch (e) {
    console.error(`No config found for environment ${env}, exiting application...`)
    process.exit(1);
}

// Log Formide logo when starting application
require('./src/lib/logo');

// Check if needed directories exist
const checkDirectories = require('./src/lib/checkDirectories');
checkDirectories();

// Create new Client instance
const Client = require('./src/core/client');
const client = new Client(config);