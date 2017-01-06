/**
* @Author: chris
* @Date:   2017-01-06T10:26:16+01:00
* @Filename: utils.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T20:00:59+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

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
