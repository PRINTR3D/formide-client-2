/**
* @Author: chris
* @Date:   2017-01-06T10:32:14+01:00
* @Filename: strategy.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T20:02:07+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const LocalStrategy = require('passport-local').Strategy

module.exports = function (client) {
  return new LocalStrategy({ usernameField: 'email' }, function (email, password, done) {
    client.db.User.authenticate(email, password, function (err, user) {
      if (err) return done(err)
      if (!user) return done(null, false, { message: 'incorrect credentials' })
      return done(null, user)
    })
  })
}
