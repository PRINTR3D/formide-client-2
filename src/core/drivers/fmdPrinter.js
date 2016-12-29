'use strict';

const Printer = require('./printer');

class FdmPrinter extends Printer {

    constructor(client, drivers, port) {
        super(client, drivers, port);
        this._type = 'FDM';
    }

    /**
     * Get the type of printer
     * @returns {string}
     */
    getType() {
        return this._type;
    }

    /**
     * Returns the amount of extruders the printer contains a status for
     * @returns {Number}
     */
    getExtruderCount() {
        return this._status.extruders.length;
    }

    getExtruderTemperature(extruderNumber) {

    }

    getBedTemperature() {

    }

    sendGcode() {

    }

    sendTuneGcode() {

    }
}

module.exports = FdmPrinter;