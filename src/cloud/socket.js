'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const socketClient = require('socket.io-client');

/**
 * Create new socket connection to Formide Cloud
 * @param url
 * @returns {*}
 */
function cloudSocket(url) {
    const conn = socketClient(url, {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 1000,
        reconnectionDelayMax: 5000,
        transports: ['websocket'],
        timeout: 5000
    });

    conn.on('error', function (err) {
        console.error('Cloud socket error: ', err.message);
    });

    conn.on('connection_error', function (err) {
        console.error('Cloud connection error: ', err.message);
    });

    conn.on('connect_timeout', function (err) {
        console.error('Cloud connection timeout: ', err.message);
    });

    conn.on('reconnect_failed', function (err) {
        console.error('Cloud reconnect error: ', err.message);
    });

    return conn;
}

/**
 * Create new socket connection to local clients
 * @param port
 * @returns {*}
 */
function localSocket(port) {
    return socketClient(`ws://127.0.0.1:${port}`, {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 1000,
        reconnectionDelayMax: 5000,
        transports: ['websocket', 'polling'],
        timeout: 5000
    });
}

module.exports = {
    cloud: cloudSocket,
    local: localSocket
};