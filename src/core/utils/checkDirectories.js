'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const fs      = require('fs');
const path    = require('path');
const Globals = require('../globals');

// storage directories
const storageDir = path.join(getHomeDirectory(), 'formide');
const logsDir    = path.join(storageDir, './logs');
const filesDir   = path.join(storageDir, './modelfiles');
const gcodeDir   = path.join(storageDir, './gcode');
const imagesDir  = path.join(storageDir, './images');

Globals.paths = {
    storageDir, logsDir, filesDir, gcodeDir, imagesDir
};

/**
 * This function checks if all directories that formide-client needs are available.
 * If needed, directories are created an populated with default files.
 */
function checkDirectories() {
    createWhenNotExisting(storageDir);
    createWhenNotExisting(logsDir);
    createWhenNotExisting(filesDir);
    createWhenNotExisting(gcodeDir);
    createWhenNotExisting(imagesDir);
}

/**
 * Create a directory when it doesn't exist
 * @param dirname
 */
function createWhenNotExisting(dirname) {
    if (!fs.existsSync(dirname)) {
        console.log(`Creating ${dirname}...`);
        fs.mkdirSync(dirname);
    }
}

/**
 * Depending on platform return correct home directory
 * @returns {*}
 */
function getHomeDirectory() {
    if (process.platform === 'win32')
        return process.env.USERPROFILE;
    return process.env.HOME;
}

module.exports = checkDirectories;