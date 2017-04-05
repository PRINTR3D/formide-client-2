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
	 *
	 * @apiParam {String} username
	 * @apiParam {String} password
	 *
	 * @apiSuccess {Boolean} success=true Indicates successful login
	 * @apiSuccess {String} token JWT token to call protected endpoints with
	 * @apiSuccessExample {json} Success:
	 *  {
	 *    "success": true,
	 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzMGRiOGUyLWNhZjYtNDlkNC1iOTkxLWY1ZjZhN2NmZTNhNyIsInVzZXJuYW1lIjoiYWRtaW5AbG9jYWwiLCJleHAiOjE0OTA4MjMxNTcsInN1YiI6ImxvZ2luIn0.BFNInvsgQ2DnvfOVmu8xnwnPA_K5JJnfw8_LbJN5cns"
	 *  }
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
	 * @apiUse user
	 * @apiPermission user
	 * @apiUse Unauthorized
	 *
	 * @apiSuccess {Boolean} valid=true Indicates successful validation
	 * @apiSuccess {Object} user Details for the validated user
	 * @apiSuccess {String} user.id ID of the user
	 * @apiSuccess {String} user.username Username of the user
	 * @apiSuccessExample {json} Success:
	 *  {
	 *    "valid": true,
	 *    "user": {
	 *      "id": "d30db8e2-caf6-49d4-b991-f5f6a7cfe3a7",
	 *      "username": "admin@local"
	 *    }
	 *  }
	 */
	router.get('/validate', http.checkAuth.jwt, function (req, res) {
		return res.ok({
			valid: true,
			user: req.user
		})
	})
	
	/**
	 * @api {get} /api/auth/users Auth:users(list)
	 * @apiGroup Auth
	 * @apiDescription List users
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 */
	router.get('/users', http.checkAuth.jwt, function (req, res) {
		co(function* () {
			const users = client.auth.findAll()
			return res.ok(users)
		}).then(null, res.serverError)
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
			return res.ok({ success: true, user: newUser })
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
		co(function* () {
			if (req.params.id !== req.user.id) return res.unauthorized('You can only edit your own user credentials')
			const updatedUser = yield client.auth.updateUser(req.params.id, req.body.username, req.body.password)
			if (!updatedUser) return res.notFound('Could not update user')
			return res.ok({ success: true, user: updatedUser })
		}).then(null, res.serverError)
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
		co(function* () {
			const remove = yield client.auth.removeUser(req.params.id)
			if (!remove) return res.notFound('Could not remove user')
			return res.ok({ success: true })
		}).then(null, res.serverError)
	})
	
	return router
}
