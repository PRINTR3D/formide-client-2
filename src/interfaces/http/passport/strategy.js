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
