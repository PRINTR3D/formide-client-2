'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert          = require('assert');
const co              = require('co');
const Globals         = require('../../core/globals');
const socket          = require('./socket');
const proxy           = require('./proxy');
const addToQueue      = require('./addToQueue');
const getCallbackData = require('./getCallbackData');

class Cloud {

    /**
     * Create new Cloud
     * @param config
     */
    constructor(client) {
        assert(client.config, 'config not passed');
        assert(client.config.cloud, 'config.cloud not passed');
        assert(client.config.cloud.URL, 'config.cloud.URL not passed');
        assert(client.config.cloud.platformURL, 'config.cloud.platformURL not passed');
        assert(client.events, 'events not passed');
        assert(client.db, 'db not passed');

        this.URL = client.config.cloud.URL;
        this.platformURL = client.config.cloud.platformURL;

        // socket connections
        this.cloud = socket.cloud(client.config.cloud.URL);
        this.local = socket.local(client.config.http.port);

        // prevent .bind waterfall
        const self = this;

        // forward all events to cloud
        client.events.onAny(function (data) {
            self.cloud.emit(this.event, data);
        });

        // socket events
        this.cloud.on('ping', function (data) {
            self.cloud.emit('pong', data);
        });

        // on connect
        this.cloud.on('connect', function () {
            co(function*() {
                const publicIP = yield client.network.getPublicIP();
                const internalIP = yield client.network.getInternalIP();
                const MAC = yield client.network.getMAC();

                // emit authentication data
                self.cloud.emit('authenticate', {
                    type: 'client',
                    ip: publicIP,
                    ip_internal: internalIP,
                    mac: MAC,
                    version: require('../../package.json').version,
                    environment: process.env.NODE_ENV,
                    port: client.config.http.port
                }, function (response) {
                    if (response.success) {
                        Globals.log(`Cloud connected`, 1, 'info');
                    }
                    else {
                        Globals.log(`Cloud not connected: ${response.message}`, 1, 'warn');
                        Globals.log(`MAC address is ${MAC}`, 2, 'info');
                    }
                });
            }).then(null, console.error);
        });

        // HTTP proxy calls are handled by the proxy function
        this.cloud.on('http', function (data) {
            Globals.log(`Cloud HTTP call: ${data.url}`, 2);
            proxy(self.cloud, client.db, data, function (err, response) {
                self.cloud.emit('http', getCallbackData(data._callbackId, error, response));
            });
        });

        // Adding to queue from Formide Cloud
        this.cloud.on('addToQueue', function (data) {
            Globals.log(`Cloud addToQueue: ${data.gcode}`, 1);
            addToQueue(client.events, client.db, data, function (err, response) {
                self.cloud.emit('addToQueue', getCallbackData(data._callbackId, error, response));
            });
        });

        // on disconnect
        this.cloud.on('disconnect', function (data) {
            // try reconnecting when server did not ban client
            if (data !== 'io server disconnect') {
                Globals.log('Cloud disconnected, trying to reconnect...', 1, 'info');
                self.cloud.io.reconnect();
            }
        });
    }
}

module.exports = Cloud;