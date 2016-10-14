'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

// modules
const Http    = require('../http');
const Cloud   = require('../cloud');
const Globals = require('./globals');

class Client {

    /**
     * New Client
     * @param config
     */
    constructor (config) {
        //noinspection JSUnresolvedVariable
        this.config = config;

        this.cloud = new Cloud(config);
        // this.http = new Http(config.http);

        Globals.log('Initiated new Client', 1, 'info');
    }

    /**
     * Get client configuration
     * @returns {{}}
     */
    getConfig() {
        return this.config;
    }
}

module.exports = Client;