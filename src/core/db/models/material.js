/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: material.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T19:59:09+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema({

    // name of material
    name: {
        type: String,
        required: true
    },

    // material type
    type: {
        type: String,
        required: true
    },

    // storing microns
    filamentDiameter: {
        type: Number,
        required: true,
        default: 1750,
        enum: [1750, 2850, 3000]
    },

    // temperature for material
    temperature: {
        type: Number,
        required: true
    },

    // temperature for first layer of material
    firstLayersTemperature: {
        type: Number,
        required: true
    },

    // temperature for bed
    bedTemperature: {
        type: Number,
        required: true
    },

    // bed temperature for first layer
    firstLayersBedTemperature: {
        type: Number,
        required: true
    },

    feedRate: {
        type: Number,
        default: 100
    },

    customProperties: {
      type: Object
    },

    // user that created material entry
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
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

module.exports = mongoose.model('Material', schema);
