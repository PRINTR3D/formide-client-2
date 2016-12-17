'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert = require('assert');

class Drivers {

    /**
     * @constructor
     * @param client - Instance of Client
     */
    constructor(client) {

        assert(client.log, '[drivers] - client.log is not found in passed instance of client');

        try {
            this.drivers = require('formide-drivers');
            this.version = require('formide-drivers/package').version;
            client.log(`Loaded Drivers v${this.version}`, 1, 'info');
        }
        catch (e) {
            client.log(e);
            client.log('Cannot load Katana binary, try re-installing katana-slicer', 1, 'warn');
        }
    }

    /**
     * Get status of all connected printers
     * @param callback
     */
    getStatus(callback) {
        return callback(null, [{
            progress: 10,
            status: 'printing',
            port: '/dev/tty.USB0'
        }]);
    }

    /**
     * Get status of single printer by port
     * @param port
     * @param callback
     * @returns {*}
     */
    getStatusByPort(port, callback) {
        return callback(null, {
            progress: 10,
            status: 'printing',
            port
        });
    }
}

module.exports = Drivers;