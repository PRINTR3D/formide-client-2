'use strict'

const JWT = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET || 'secret'
const EXPIRY = 60 * 60 * 24 * 31 // 1 month

/**
 * Sign a new JWT token
 * @param user
 */
function sign (user) {
	return JWT.sign(user, SECRET, {
		noTimestamp: true,
		expiresIn: EXPIRY,
		subject: 'login'
	})
}

/**
 * Verify a JWT token
 * @param token
 * @returns {*}
 */
function verify (token) {
	try {
		return JWT.verify(token, SECRET)
	} catch (e) {
		console.warn('Could not verify JWT', e, token)
		return false
	}
}

module.exports = {
	sign, verify
}