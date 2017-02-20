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
	 */
	router.get('/validate', http.checkAuth.jwt, function (req, res) {
		return res.ok({
			valid: true,
			user: req.user
		})
	})
	
	return router
}
