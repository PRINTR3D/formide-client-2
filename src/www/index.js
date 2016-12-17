'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const express = require('express');
const Globals = require('../core/globals');

class UI {

    constructor(config) {
        const self = this;

        this.app = express();
        this.server = require('http').Server(this.app);
        this.server.listen(config.http.ui, function () {
            Globals.log(`UI running on port ${self.server.address().port}`, 1, 'info');
        });

        // basic app environment info
        this.app.get('/api/env', function(req, res) {
            const pkg = require('../../package.json');
            return res.json({
                environment: process.env.NODE_ENV,
                name:        pkg.name,
                version:     pkg.version,
                location:    'local'
            });
        });

        // public assets
        this.app.get('/public/*', function(req, res) {
            return res.sendfile(req.params[0], { root: FormideClient.appRoot + '/public' });
        });

        // angular app
        this.app.get('/*', function(req, res) {
            return res.sendfile('index.html', { root: __dirname });
        });

        return {
            app: this.app,
            server: this.server
        }
    }
}

module.exports = UI;