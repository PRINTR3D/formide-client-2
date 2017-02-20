'use strict'

// const co = require('co')
// const assert = require('assert')
const router = require('express').Router()
const jwt = require('../../../core/utils/jwt')

module.exports = function (client, http) {
	
	/**
	 * @api {post} /api/auth/login Auth:login
	 * @apiGroup Auth
	 * @apiDescription Login with username and password
	 * @apiVersion 1.0.0
	 */
	router.post('/login', function (req, res) {
		req.checkParams(['username', 'password'])
		
		// find user
		const user = client.auth.authenticate(req.body.username, req.body.password)
		if (!user) return res.unauthorized('Could not find user')
		
		const token = jwt.sign(user)
		return res.ok({
			success: true,
			token: token
		})
	})
	
	return router
}
