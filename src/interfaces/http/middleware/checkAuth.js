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
  client.logger.log(`unauthorized: ${reason}`, 'debug')
  return res.unauthorized(reason)
}
