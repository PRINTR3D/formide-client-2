'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

// modules
const Http    = require('../http');
const Ws      = require('../ws');
const Cloud   = require('../cloud');
const DB      = require('../db');

const Globals = require('./globals');
const Events  = require('./events');

class Client {

    /**
     * New Client
     * @param config
     */
    constructor (config) {
        //noinspection JSUnresolvedVariable
        this.config = config;

        //noinspection JSUnresolvedVariable
        this.events = Events;

        this.db    = new DB(config,    this.events);
        this.cloud = new Cloud(config, this.events, this.db);
        this.http  = new Http(config,  this.events, this.db);
        this.ws    = new Ws(config,    this.events, this.http);

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