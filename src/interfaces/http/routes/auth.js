/**
* @Author: chris
* @Date:   2017-01-06T18:47:41+01:00
* @Filename: auth.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T23:11:13+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
  assert(client, '[http] - client not passed in auth router')
  assert(http, '[http] - http not passed in auth router')

  /**
   * @api {POST} /api/auth/login Local login
   * @apiGroup Auth
   * @apiDescription Local user login with email and password
   * @apiVersion 1.0.0
   */
  router.post('/login', http.passport.authenticate('local-login'), function (req, res) {
    client.db.AccessToken.create({
      createdBy: req.user[global.MONGO_ID_FIELD],
      isAdmin: req.user.isAdmin
    }).then(function (accessToken) {
      return res.ok({
        access_token: accessToken.token
      })
    }).catch(res.serverError)
  })

  /**
   * @api {GET} /api/auth/session Get current session
   * @apiGroup Auth
   * @apiDescription Get current session from access token
   * @apiVersion 1.0.0
   */
  router.get('/session', http.checkAuth.user, function (req, res) {
    client.db.AccessToken.findOne({
      token: req.token
    }).then(function (accessToken) {
      return res.ok(accessToken)
    }).catch(res.serverError)
  })

  /**
   * @api {GET} /api/auth/tokens Get tokens
   * @apiGroup Auth
   * @apiDescription Get all access tokens from the database
   * @apiVersion 1.0.0
   */
  router.get('/tokens', http.checkAuth.user, function (req, res) {
    client.db.AccessToken.find({
      createdBy: req.user.id
    }).then(function (accessTokens) {
      return res.ok(accessTokens)
    }).catch(res.serverError)
  })

  /**
   * @api {POST} /api/auth/tokens Create token
   * @apiGroup Auth
   * @apiDescription Generate an access token manually with the asked permissions. Useful for development purposes. Only admins can create tokens this way.
   * @apiVersion 1.0.0
   * @apiParam {Boolean} isAdmin Add admin rights to token or not.
   */
  router.post('/tokens', http.checkAuth.admin, function (req, res) {
    client.db.AccessToken.create({
      createdBy: req.user.id,
      isAdmin: req.body.isAdmin
    })
  })

  /**
   * @api {DELETE} /api/auth/tokens/:token Delete token
   * @apiGroup Auth
   * @apiDescription Delete access token, forcing a user to login again
   * @apiVersion 1.0.0
   */
  router.delete('/tokens/:token', http.checkAuth.admin, function (req, res) {
    client.db.AccessToken.destroy({ token: req.params.token }).then(function () {
      return res.ok({ message: 'Access token destroyed' })
    }).catch(res.serverError)
  })

  /**
   * @api {GET} /api/auth/users Get users
   * @apiGroup Auth
   * @apiDescription Get a list of users
   * @apiVersion 1.0.0
   */
  router.get('/users', http.checkAuth.admin, function (req, res) {
    client.db.User.find().then(function (users) {
      return res.ok(users)
    }).catch(res.serverError)
  })

  /**
   * @api {GET} /api/auth/users/:id Get single user
   * @apiGroup Auth
   * @apiDescription Get a single user by ID
   * @apiVersion 1.0.0
   */
  router.get('/users/:id', http.checkAuth.admin, function (req, res) {
    client.db.User.findOne({ [global.MONGO_ID_FIELD]: req.params.id }).then(function (user) {
      return res.ok(user)
    }).catch(res.serverError)
  })

  /**
   * @api {POST} /api/auth/users Create user
   * @apiGroup Auth
   * @apiDescription Create a new user
   * @apiVersion 1.0.0
   */
  router.post('/users', http.checkAuth.admin, function (req, res) {
    client.db.User.create({
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin
    }).then(function (newUser) {
      return res.ok({
        message: 'User created',
        user: newUser
      })
    }).catch(res.serverError)
  })

  /**
   * @api {PUT} /api/auth/users/:id Update user
   * @apiGroup Auth
   * @apiDescription Update user settings
   * @apiVersion 1.0.0
   */
  router.put('/users/:id', http.checkAuth.admin, function (req, res) {
    client.db.User.findOneAndUpdate({ [global.MONGO_ID_FIELD]: req.params.id }, {
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin
    }, {
      new: true
    }).then(function (updatedUser) {
      return res.ok({
        message: 'User updated',
        user: updatedUser
      })
    }).catch(res.serverError)
  })

  /**
   * @api {DELETE} /api/auth/users/:id Delete user
   * @apiGroup Auth
   * @apiDescription Delete a user from the database
   * @apiVersion 1.0.0
   */
  router.delete('/users/:id', http.checkAuth.admin, function (req, res) {
    client.db.user.destroy({ [global.MONGO_ID_FIELD]: req.params.id }).then(function () {
      return res.ok({
        message: 'User removed'
      })
    }).catch(res.serverError)
  })

  return router
}
