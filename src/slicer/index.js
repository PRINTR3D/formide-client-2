'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const Globals = require('../core/globals');

class Slicer {

    constructor() {

        try {
            this.katana = require('katana-slicer');
            this.reference = require('katana-slicer/reference');
            Globals.log(`Loaded Katana v${this.reference.version}`, 1, 'info');
        }
        catch (e) {
            console.log(e);
            Globals.log('Cannot load Katana binary, try re-installing katana-slicer', 1, 'warn');
        }
    }

    slice() {

    }

    createSliceRequest() {

    }

    /**
     * Get reference file for Katana slice engine
     * @returns {*}
     */
    getReferenceFile() {
        return this.reference;
    }
}

module.exports = Slicer;