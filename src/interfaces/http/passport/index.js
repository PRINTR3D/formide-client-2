/**
* @Author: chris
* @Date:   2017-01-06T10:25:34+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T11:11:22+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const passport = require('passport')

module.exports = function (client) {
  const utils = require('./utils')(client)

  // serialization
  passport.serializeUser(utils.serializeUser)
  passport.deserializeUser(utils.deserializeUser)

  // strategies
  passport.use('local-login', require('./strategy')(client))

  return passport
}
