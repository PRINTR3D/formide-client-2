'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

class Client {

    config = {};

    constructor (config) {
        this.config = config;
    }

    getConfig() {
        return this.config;
    }
}

module.exports = Client;