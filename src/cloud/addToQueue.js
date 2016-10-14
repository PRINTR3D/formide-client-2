'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert = require('assert');
const crypto = require('crypto');
const Globals = require('../core/globals');

/**
 * Add an item to the print queue from Formide Cloud
 * @param socket
 * @param data
 * @param callback
 */
function addToQueue(socket, db, data, callback) {
    const hash = crypto.randomBytes(16).toString('hex');

    db.QueueItem
        .create({
            origin:   'cloud',
            status:   'downloading',
            gcode:    hash,
            printJob: data.printJob,
            port:     data.port
        })
        .then(function (queueItem) {
            callback(null, {
                success: true,
                queueItem: queueItem
            });

            // TODO: more stuff like downloading the actual gcode
        })
        .catch(function (err) {
            Globals.log(`DB error: ${err.message}`, 1, 'error');
            return callback(err);
        });
}

module.exports = addToQueue;