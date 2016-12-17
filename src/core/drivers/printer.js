'use strict';

const assert = require('assert');

class Printer {

    constructor(client, drivers) {

        assert(client, '[drivers] - no instance of `client` passed in Printer');
        assert(drivers, '[drivers] - no instance of `drivers` passed in Printer');


    }

    getStatus() {

    }

    getProgress() {

    }

    getTemperatures() {

    }

    getPosition() {

    }

    getQueue() {

    }

    clearQueue() {

    }

    startPrintFromFile() {

    }

    startPrintFromQueueItem() {

    }

    pausePrint() {

    }

    resumePrint() {

    }

    stopPrint() {

    }
}

module.exports = Printer;