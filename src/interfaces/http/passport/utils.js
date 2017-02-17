'use strict'

module.exports = function (client) {
  return {
    serializeUser (user, done) {
      return done(null, user[global.MONGO_ID_FIELD])
    },

    deserializeUser (userId, done) {
      client.db.User.findOne({ id: userId }).then(function (user) {
        if (!user) return done(null, false)
        return done(user)
      }).catch(done)
    }
  }
}
