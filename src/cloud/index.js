'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert         = require('assert');
const co             = require('co');
const Globals        = require('../core/globals');
const socket         = require('./socket');
const proxy          = require('./proxy');
const addToQueue     = require('./addToQueue');
const getNetworkInfo = require('../lib/getNetworkInfo');

class Cloud {

    /**
     * Create new Cloud
     * @param config
     */
    constructor(config, events, db) {
        assert(config, 'config not passed');
        assert(config.cloud, 'config.cloud not passed');
        assert(config.cloud.URL, 'config.cloud.URL not passed');
        assert(config.cloud.platformURL, 'config.cloud.platformURL not passed');
        assert(events, 'events not passed');
        assert(db, 'db not passed');

        this.URL = config.cloud.URL;
        this.platformURL = config.cloud.platformURL;

        // socket connections
        this.cloud = socket.cloud(config.cloud.URL);
        this.local = socket.local(config.http.port);

        // prevent .bind waterfall
        const self = this;

        // forward all events to cloud
        events.onAny(function (data) {
            self.cloud.emit(this.event, data);
        });

        // socket events
        this.cloud.on('ping', function (data) {
            self.cloud.emit('pong', data);
        });

        // on connect
        this.cloud.on('connect', function () {
            co(function*() {
                const publicIP = yield getNetworkInfo.getPublicIP();
                const internalIP = yield getNetworkInfo.getInternalIP();
                const MAC = yield getNetworkInfo.getMAC();

                self.cloud.emit('authenticate', {
                    type: 'client',
                    ip: publicIP,
                    ip_internal: internalIP,
                    mac: MAC,
                    version: require('../../package.json').version,
                    environment: process.env.NODE_ENV,
                    port: config.http.port
                }, function (response) {
                    if (response.success) {
                        Globals.log(`Cloud connected`, 1, 'info');
                        // events.onAny(forwardEvents);
                    }
                    else {
                        Globals.log(`Cloud not connected: ${response.message}`, 1, 'warn');
                    }
                });
            }).then(null, console.error);
        });

        this.cloud.on('http', function (data) {
            Globals.log(`Cloud HTTP call: ${data.url}`, 2);
            proxy(self.cloud, data, function () {

            });
        });

        this.cloud.on('addToQueue', function (data) {
            Globals.log(`Cloud addToQueue: ${data.gcode}`, 1);
            addToQueue(self.cloud, events, db, data, function () {

            });
        });

        // on disconnect
        this.cloud.on('disconnect', function (data) {
            // turn off event forwarding
            // events.offAny(forwardEvents);

            // try reconnecting when server did not ban client
            if (data !== 'io server disconnect') {
                Globals.log('Cloud disconnected, trying to reconnect...', 1, 'info');
                self.cloud.io.reconnect();
            }
        });
    }
}

module.exports = Cloud;