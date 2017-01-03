/**
* @Author: chris
* @Date:   2017-01-01T18:29:32+01:00
* @Filename: webhookModel.js
* @Last modified by:   chris
* @Last modified time: 2017-01-01T18:34:04+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const mongoose = require('mongoose')

const schema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  events: [{
    type: String
  }],

  url: {
    type: String,
    required: true
  }

}, {
  timestamps: true,
  versionKey: false
})

// duplicate _id to id
schema.virtual('id').get(function () {
  return this[global.MONGO_ID_FIELD].toHexString()
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Webhook', schema)
