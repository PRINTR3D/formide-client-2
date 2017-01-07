/**
* @Author: chris
* @Date:   2017-01-06T10:22:09+01:00
* @Filename: checkAuth.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T16:12:16+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = function (client) {
  function token (req, res, next) {
    if (req.token) {
      client.db.AccessToken.findOne({ token: req.token }).then(function (accessToken) {
        if (accessToken) {
          req.accessToken = accessToken
          return next(null, accessToken)
        } else {
          returnUnauthorized(client, res, 'Access token not found in database')
        }
      }).catch(next)
    } else {
      returnUnauthorized(client, res, 'Token not found in request')
    }
  }

  function user (req, res, next) {
    token(req, res, function (_err, accessToken) {
      client.db.User.findOne({ [global.MONGO_ID_FIELD]: accessToken.createdBy }).then(function (user) {
        if (user) {
          req.user = user
          req.user.id = req.user[global.MONGO_ID_FIELD]
          return next(null, user)
        } else {
          returnUnauthorized(client, res, 'User not found in database')
        }
      }).catch(next)
    })
  }

  function admin (req, res, next) {
    user(req, res, function (_err, user) {
      if (user.isAdmin && req.accessToken.isAdmin) {
        return next()
      } else {
        returnUnauthorized(client, res, 'User is not admin and cannot access this endpoint')
      }
    })
  }

  return {
    token, user, admin
  }
}

function returnUnauthorized (client, res, reason) {
  client.log(`unauthorized: ${reason}`, 'debug')
  return res.unauthorized(reason)
}
