'use strict';

const Printer = require('./printer');

class FdmPrinter extends Printer {

    constructor(client, drivers) {
        super(client, drivers);
    }

    getExtruderTemperature(extruderNumber, callback) {

    }

    sendGcode() {

    }

    sendTuneGcode() {

    }
}

module.exports = FdmPrinter;