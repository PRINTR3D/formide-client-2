'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const LEVEL = process.env.CLIENT_LOG_LEVEL || 1;
const assert = require('assert');
const moment = require('moment');
const clc = require('cli-color');

const colorMap = {
    info: clc.blue,
    warn: clc.yellow,
    error: clc.red.bold
}

/**
 * Simple logging function that adds timestamps, allows log leveling and adds some color
 * @param message
 * @param level
 * @param type
 */
function log(message, level, type) {
    assert(message, 'message is required to log something');
    level = level || 1;
    type = type || 'log';
    const human_timestamp = moment().format('HH:mm:ss.SSS');
    if (level <= LEVEL)
        console.log(clc.white.italic(human_timestamp) + " " + colorMap[type](message));
}

module.exports = log;