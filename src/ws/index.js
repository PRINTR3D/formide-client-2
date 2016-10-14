'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const io      = require('socket.io');
const ws      = require('nodejs-websocket');
const Globals = require('../core/globals');

class Ws {

    constructor(config, events, http, db) {
        const self = this;

        this.db = db;

        // Emit all system events to connected native UI socket connections
        // These are not compatible with socket.io, hence the separate websocket library
        const server = ws.createServer(function (conn) {

            // Format socket messages
            function forwardEvents(data) {
                data = data || {};
                data.device = 'LOCAL';
                conn.sendText(JSON.stringify({
                    channel: this.event,
                    data:    data
                }));
            }

            conn.on('text', function (message) {
                try {
                    const data = JSON.parse(message);

                    if (data.channel === 'authenticate')
                        self.authenticate(data.data.accessToken, function (err, accessToken) {
                            if (err)
                                Globals.log(`Native UI socket error: ${err.message}`, 1, 'error');

                            conn.sendText(JSON.stringify({
                                channel: 'authenticate',
                                data: {
                                    success: true,
                                    message: 'Authentication successful',
                                    notification: false
                                }
                            }));

                            events.onAny(forwardEvents);
                        });
                }
                catch (e) {
                    Globals.log(`Native UI socket error: ${e.message}`, 1, 'error');
                }
            });

            conn.on('close', function () {
                events.offAny(forwardEvents);
                Globals.log(`Native UI socket disconnected`, 2, 'info');
            });

            conn.on('error', function (err) {
                // TODO
            });
        });

        const socketIO = io.listen(http.server);

        // Emit all system events to connected socket.io clients
        socketIO.on('connection', function (socket) {

            function forwardSocketEvents(data) {
                socket.emit(this.event, data);
            }

            socket.on('authenticate', function (data, callback) {
                self.authenticate(data.accessToken, function (err, accessToken) {
                    if (err) {
                        callback({ success: false, message: err.message });
                        return socket.disconnect();
                    }

                    if (!accessToken) {
                        callback({ success: false, message: "Access token not found. Please provide a valid access token." });
                        return socket.disconnect();
                    }

                    events.onAny(forwardSocketEvents);

                    // respond to client
                    callback({
                        success: true,
                        message: 'Authentication successful'
                    });
                });
            })

            socket.on('error', function (err) {
                Globals.log(`Local socket error: ${err.message}`, 1, 'error');
            });

            socket.on('disconnect', function () {
                events.offAny(forwardSocketEvents);
                Globals.log(`Local socket disconnected`, 2, 'info');
            });
        });
    }

    authenticate(token, callback) {
        this.db.AccessToken.findOne({ token }, callback);
    }
}

module.exports = Ws;