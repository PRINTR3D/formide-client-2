/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: user.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T20:00:11+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

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
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  customProperties: {
    type: Object
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

schema.statics.authenticate = function (email, password, next) {
  this.findOne({ email }, '+password').exec().then(function (user) {
    if (!user || !user.password) return next(null, false)
    bcrypt.compare(password, user.password, function (err, isMatch) {
      if (err) return next(err)
      return next(null, isMatch ? user : false)
    })
  }, next)
}

/**
 * Validate email address
 * @param email
 * @returns {boolean}
 */
function isValidEmail (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
}

module.exports = mongoose.model('User', schema)
