'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert  = require('assert');
const request = require('request');
const co      = require('co');
const Globals = require('../core/globals');

/**
 * Process proxy call from Formide Cloud
 * @param db
 * @param data
 * @param callback
 */
function proxy(db, data, callback) {
    assert(db, 'db not passed');
    assert(data, 'data not passed');
    assert(data.url, 'data.url not passed');

    authenticate(db, function (err, accessToken) {
        if (err)
            return callback(err);

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
        request(options, function (error, response) {
            if (error)
                return callback(error);

            return callback(null, response);
        });
    });
}

/**
 * Authenticate proxy call
 * @param db
 * @param callback
 */
function authenticate(db, callback) {
    co(function*() {
        let accessToken = yield db.AccessToken.findOne({ sessionOrigin: 'cloud' });

        if (!accessToken)
            accessToken = yield db.AccessToken.create({
                sessionOrigin: 'cloud',
                permissions: ['owner', 'admin']
            });

        return callback(null, accessToken.token);

    }).then(null, callback);
}

module.exports = proxy;