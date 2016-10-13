'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

// modules
const Http  = require('../http');
const Cloud = require('../cloud');

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