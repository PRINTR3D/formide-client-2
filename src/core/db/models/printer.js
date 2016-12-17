'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const mongoose = require('mongoose');
const TYPE_CARTESIAN = 'CARTESIAN';
const TYPE_DELTA     = 'DELTA';
const ORIGIN_CORNER  = 'CORNER';
const ORIGIN_CENTER  = 'CENTER';

const schema = mongoose.Schema({

    // name of printer (or printer preset)
    name: {
        type: String,
        required: true
    },

    // printer type
    type: {
        type: String,
        enum: ['fdm', 'fff', 'sla', 'sls', 'dlp'],
        default: 'fdm' // for now
    },

    // abilities for post-processing
    abilities: [{
        type: String
    }],

    // object with bed information (like size and heated)
    bed: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        validate: {
            validator: isValidBed,
            message: 'Bed is not valid'
        }
    },

    // object with axis directions
    axis: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        validate: {
            validator: isValidAxis,
            message: 'Axis is not valid'
        }
    },

    // array with extruder objects
    extruders: [{
        type: mongoose.Schema.Types.Mixed,
        required: true,
        validate: {
            validator: isValidExtruder,
            message: 'Extruder is not valid'
        }
    }],

    // usb port that printer is connected to
    port: {
        type: String
    },

    // baudrate of the printer, also autodetected by driver
    baudrate: {
        type: Number
    },

    // custom gcode commands for this printer that will appear as a set of buttons in the interface
    customCommands: [{
        type: mongoose.Schema.Types.Mixed,
        validate: {
            validator: isValidCustomCommand,
            message: 'Custom GCode commands not valid'
        }
    }],

    // preset printer or not
    preset: {
        type: Boolean,
        default: false,
        select: false
    },

    // custom start gcode (put in front of gcode file)
    startGcode: [{
        type: String,
        default: ["G21", "G28", "G1 Z5 F5000", "G90", "G92 E0", "M82", "G92 E0"]
    }],

    // custom end gcode (put at end of gcode file)
    endGcode: [{
        type: String,
        default: ["G92 E0", "M104 S0", "G28 X0", "M84"]
    }],

    // gcode type to use when slicing for this printer
    gcodeFlavour: {
        type: String,
        default: 'GCODE_FLAVOR_REPRAP'
    },

    // user that created printer entry
    createdBy: {
        type: mongoose.Schema.Types.ObjectId
    },

    // user that updated the printer last
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId
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

// execute this before saving the model to DB
schema.pre('save', function(next) {
    if (this.bed) {
        if (this.bed.hasOwnProperty('placeOfOrigin'))
            if (this.bed.placeOfOrigin !== ORIGIN_CORNER && this.bed.placeOfOrigin !== ORIGIN_CENTER)
                return next(new Error('bed.placeOfOrigin has an invalid value'));

        // when cartesian and no origin, default to corner
        if (this.bed.printerType === TYPE_CARTESIAN)
            if (!this.bed.hasOwnProperty('placeOfOrigin')) this.bed.placeOfOrigin = ORIGIN_CORNER;

        // when delta an no origin, default to center
        if (this.bed.printerType === TYPE_DELTA)
            if (!this.bed.hasOwnProperty('placeOfOrigin')) this.bed.placeOfOrigin = ORIGIN_CENTER;

        return next();
    }

    return next(new Error('bed is not set'));
});

// custom validation for bed
function isValidBed(val) {
    if (!val.hasOwnProperty('printerType'))
        return false;

    if (val.printerType === TYPE_CARTESIAN)
        return (typeof val.x === 'number') && (typeof val.y === 'number') && (typeof val.z === 'number') && (typeof val.heated === 'boolean');

    if (val.printerType === TYPE_DELTA)
        return (typeof val.diameter === 'number') && (typeof val.z === 'number') && (typeof val.heated === 'boolean');

    // printerType not valid
    return false;
}

// custom validation for axes
function isValidAxis(val) {
    return (val.x === 1 || val.x === -1) && (val.y === 1 || val.y === -1) && (val.z === 1 || val.z === -1);
}

// custom validation for extruders
function isValidExtruder(extruder) {
    // for (const extruder of val) {
    // if (!extruder)
    // return false;

    if (!Number.isInteger(extruder.id))
        return false;

    if (typeof extruder.name !== 'string' && !(extruder.name instanceof String))
        return false;

    if (!Number.isInteger(extruder.nozzleSize))
        return false;

    if (!Number.isInteger(extruder.filamentDiameter))
        return false;
    // }

    return true;
}

// custom validation for custom commands
function isValidCustomCommand(customCommand) {
    // for (var i in val) {
    if (typeof customCommand !== 'object') return false;
    if (typeof customCommand.label !== 'string') return false;
    if (typeof customCommand.command !== 'string') return false;
    // }
    return true;
}

module.exports = mongoose.model('Printer', schema);