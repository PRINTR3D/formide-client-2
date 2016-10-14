'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert   = require('assert');
const mongoose = require('mongoose');
const Globals  = require('../core/globals');

class DB {

    constructor(config, events) {
        assert(config, 'config not passed');
        assert(config.db, 'config.db not passed');
        assert(config.db.connectionString, 'config.db.connectionString not passed');

        mongoose.connect(config.db.connectionString);

        const db = mongoose.connection;
        db.on('error', function (err) {
            Globals.log(`Error connecting to MongoDB: ${err.message}`, 1, 'error')
            process.exit(1);
        });
        db.on('open', function () {
            Globals.log('Connected to MongoDB', 1, 'info');
        });

        const models = {
            QueueItem: require('./models/queueItem')
        };

        return models;
    }
}

module.exports = DB;