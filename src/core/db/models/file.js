/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: file.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T20:00:46+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema({

    hash: {
        type: String,
        required: true
    },

    // name of user file
    filename: {
        type: String,
        required: true
    },

    prettyname: {
        type: String,
        required: true
    },

    // type, can also be folder
    filetype: {
        type: String,
        required: true,
        enum: ['text/stl', 'text/gcode']
    },

    // size in bytes
    filesize: {
        type: Number,
        required: true
    },

    // files can have images from storage attached to them
    images: [{
        type: String
    }],

    // description for user file
    description: {
        type: String,
        default: 'My file'
    },

    // user that created file
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    customProperties: {
      type: Object
    }

}, {
    timestamps: true,
    versionKey: false
});

// duplicate _id to id
schema.virtual('id').get(function() {
    return this[MONGO_ID_FIELD].toHexString();
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('File', schema);
