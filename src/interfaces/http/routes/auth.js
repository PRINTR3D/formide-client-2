'use strict'

const co = require('co')
const router = require('express').Router()
const jwt = require('../../../core/utils/jwt')

module.exports = function (client, http) {
	
	/**
	 * @api {post} /api/auth/login Auth:login
	 * @apiGroup Auth
	 * @apiDescription Login with username and password
	 * @apiVersion 1.0.0
	 * @apiParam {String} username
	 * @apiParam {String} password
	 */
	router.post('/login', http.checkParams(['username', 'password']), function (req, res) {
		co(function* () {
			// find user
			const user = yield client.auth.authenticate(req.body.username, req.body.password)
			if (!user) return res.unauthorized('Could not find user')
			
			const token = jwt.sign(user)
			return res.ok({
				success: true,
				token: token
			})
		}).then(null, res.serverError)
	})
	
	/**
	 * @api {get} /api/auth/validate Auth:validate
	 * @apiGroup Auth
	 * @apiDescription Validate JWT token
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 */
	router.get('/validate', http.checkAuth.jwt, function (req, res) {
		return res.ok({
			valid: true,
			user: req.user
		})
	})
	
	/**
	 * @api {post} /api/auth/users Auth:users(create)
	 * @apiGroup Auth
	 * @apiDescription Create a new user
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} username
	 * @apiParam {String} password
	 */
	router.post('/users', http.checkAuth.jwt, http.checkParams(['username', 'password']), function (req, res) {
		co(function* () {
			const newUser = yield client.auth.createUser(req.body.username, req.body.password)
			if (!newUser) return res.badRequest('Could not create new user, please try a different username')
			
			return res.ok({
				success: true,
				user: newUser
			})
		}).then(null, res.serverError)
	})
	
	/**
	 * @api {put} /api/auth/users/:id Auth:users(update)
	 * @apiGroup Auth
	 * @apiDescription Update a user
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} id
	 * @apiParam {String} username
	 * @apiParam {String} password
	 */
	router.put('/users/:id', http.checkAuth.jwt, http.checkParams(['username', 'password']), function (req, res) {
		
	})
	
	/**
	 * @api {delete} /api/auth/users/:id Auth:users(delete)
	 * @apiGroup Auth
	 * @apiDescription Delete a user
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 * @apiParam {String} id
	 */
	router.delete('/users/:id', http.checkAuth.jwt, function (req, res) {
		
	})
	
	return router
}
