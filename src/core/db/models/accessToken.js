/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: accessToken.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T19:19:11+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const mongoose = require('mongoose')
const crypto = require('crypto')

const schema = mongoose.Schema({

  createdBy: {
    type: mongoose.Schema.Types.ObjectId
  },

  token: {
    type: String,
    unique: true
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  sessionOrigin: {
    type: String,
    enum: ['cloud', 'local'],
    default: 'local'
  }

}, {
  timestamps: true,
  versionKey: false
})

// generate random token before creating document
schema.pre('save', function (next) {
  if (this.isNew && !this.token) {
    this.token = crypto.randomBytes(32).toString('hex')
  }
  return next()
})

// duplicate _id to id
schema.virtual('id').get(function () {
  return this[global.MONGO_ID_FIELD].toHexString()
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('AccessToken', schema)
