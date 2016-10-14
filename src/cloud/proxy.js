'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert = require('assert');
const request = require('request');
const Globals = require('../core/globals');

/**
 * Process proxy call from Formide Cloud
 * @param socket
 * @param data
 * @param callbackconst getCallbackData = require('./getCallbackData');
 */
function proxy(socket, data, callback) {
    assert(socket, 'socket not passed');
    assert(data, 'data not passed');
    assert(data.url, 'data.url not passed');

    // TODO: authenticate
    const accessToken = '';

    var options = {
        method: data.method,
        uri: `http://127.0.0.1:${Globals.config.http.port}/${data.url}`,
        auth: {
            bearer: accessToken
        }
    }

    if (data.method === 'GET')
        options.qs = data.data;
    else
        options.form = data.data;

    // Do a local HTTP request to get the data and respond back via socket
    request(options, function (error, response, body) {
        if (error)
            return callback(error);

        return callback(null, response);
    });
}

/**
 * Authenticate proxy call
 * @param data
 * @param callback
 */
function authenticate(data, callback) {

}

module.exports = proxy;