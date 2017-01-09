/**
* @Author: chris
* @Date:   2016-12-18T02:15:29+01:00
* @Filename: queueItem.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T20:00:29+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema({
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

/**
 * Set all items that are currently printing for port back to queued.
 * This is used when a printer is disconnected while it was printing.
 * @param port
 * @param callback
 */
schema.statics.setQueuedForPort = function (port, callback) {
    this.update({ port: port, status: 'printing' }, callback);
}

module.exports = mongoose.model('QueueItem', schema);
