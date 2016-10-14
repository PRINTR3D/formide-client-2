'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const Globals = require('../core/globals');

class Drivers {

    constructor() {

        try {
            this.drivers = require('formide-drivers');
            this.version = require('formide-drivers/package').version;
            Globals.log(`Loaded Drivers v${this.version}`, 1, 'info');
        }
        catch (e) {
            console.log(e);
            Globals.log('Cannot load Katana binary, try re-installing katana-slicer', 1, 'warn');
        }
    }
}

module.exports = Drivers;