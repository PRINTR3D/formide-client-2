/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: printJob.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T20:00:39+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema({

    // name of print job
    name: {
        type: String,
        required: true
    },

    // g code for print job
    gcode: {
        type: String
    },

    // response id for print job
    responseId: {
        type: String
    },

    // print job's slice settings
    sliceSettings: {
        type: Object
    },

    // print job's slice request
    sliceRequest: {
        type: Object
    },

    // print job's slice response
    sliceResponse: {
        type: Object
    },

    // slice finished or not
    sliceFinished: {
        type: Boolean,
        default: false
    },

    // method of slicing
    sliceMethod: {
        type: String,
        required: true,
        enum: ['cloud', 'local', 'custom']
    },

    // user that created print job
    createdBy: {
        type: mongoose.Schema.Types.ObjectId
    },

    // files for print job
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }],

    // materials for print job
    materials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Material'
    }],

    // printer for print job
    printer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Printer'
    },

    sliceProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SliceProfile'
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

module.exports = mongoose.model('PrintJob', schema);
