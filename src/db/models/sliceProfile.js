'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const mongoose           = require('mongoose');
const updateSliceProfile = require('../utils/updateSliceProfile');

const schema = mongoose.Schema({

    // name of sliceprofile, presets should use something descriptive like
    // "Felix Pro Medium Quality"
    name: {
        type: String,
        required: true
    },

    // slice profile settings
    settings: {
        type: Object,
        required: true
    },

    // preset or not
    preset: {
        type: Boolean,
        default: false,
        select: false
    },

    // we keep track of sliceprofiles versions to deal with slicer updates
    version: {
        type: String
    },

    // user that created slice profile
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

// before saving the document, we update it to the latest slicer version settings
schema.pre('save', updateSettings);

// before updating the document, we update it to the latest slicer version settings
schema.pre('update', updateSettings);

// before fetching a document, we update it to the latest slicer version settings
schema.pre('init', updateSettings);

/**
 * Call the slicer service to update a slice profile to the latest version
 * @param sliceProfile
 * @param next
 */
function updateSettings(next, data) {
    var sliceProfile = data;

    if (!sliceProfile.settings)
        sliceProfile = this;

    updateSliceProfile(sliceProfile.settings, sliceProfile.version, function (err, updatedSettings) {
        if (err)
            return next(err);
        // update document to latest version settings
        // only fill in settings when it already exists
        if (sliceProfile.settings)
            sliceProfile.settings = updatedSettings.settings;

        // only fill in version when it already exists
        if (sliceProfile.version)
            sliceProfile.version = updatedSettings.version;

        return next();
    });
}

module.exports = mongoose.model('SliceProfile', schema);