'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema({

    fullName: {
        type: String,
        minlength: 1,
        maxlength: 100,
        select: false,
        required: true
    },

    email: {
        type: String,
        unique: true,
        validate: {
            validator: isValidEmail,
            message: 'Email should be valid email address'
        }
    },

    password: {
        type: String,
        select: false
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

/**
 * Validate email address
 * @param email
 * @returns {boolean}
 */
function isValidEmail(email) {
    console.log('email:', email);
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

module.exports = mongoose.model('User', schema);