'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert = require('assert');
const co     = require('co');
const socket = require('./socket');
const proxy  = require('./proxy');
const queue  = require('./addToQueue');
const getNetworkInfo = require('../lib/getNetworkInfo');

class Cloud {

    /**
     * Create new Cloud
     * @param config
     */
    constructor(config, events) {
        assert(config, 'config not passed');
        assert(config.cloud, 'config.cloud not passed');
        assert(config.cloud.URL, 'config.cloud.URL not passed');
        assert(config.cloud.platformURL, 'config.cloud.platformURL not passed');
        // assert(events, 'events not passed');

        this.URL = config.cloud.URL;
        this.platformURL = config.cloud.platformURL;

        // socket connections
        this.cloud = socket.cloud(config.cloud.URL);
        this.local = socket.local(config.http.port);

        // prevent .bind waterfall
        const self = this;

        // forward all events to cloud
        function forwardEvents(data) {
            self.cloud.emit(this.event, data);
        }

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
                        console.log('Cloud connected');
                        events.onAny(forwardEvents);
                    }
                    else {
                        console.log('Cloud not connected:', response.message);
                    }
                });
            }).then(null, console.error);
        });

        this.cloud.on('http', function (data) {
            proxy(self.cloud, data, function () {

            });
        });

        this.cloud.on('addToQueue', function () {

        });

        // on disconnect
        this.cloud.on('disconnect', function () {
            // turn off event forwarding
            events.offAny(forwardEvents);

            // try reconnecting
            console.info('Cloud disconnected, trying to reconnect...');
            this.cloud.io.reconnect();
        });
    }
}

module.exports = Cloud;