'use strict'

const JWT = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET || 'secret'
const EXPIRY = 60 * 60 * 24 * 365 * 2 // 2 years

/**
 * Sign a new JWT token
 * @param user
 */
function sign (user) {
	return JWT.sign({
		id: user.id,
		username: user.username
	}, SECRET, {
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
		const user = JWT.verify(token, SECRET)
		return user
	} catch (e) {
		// console.warn('Could not verify JWT', e, token)
		return false
	}
}

module.exports = {
	sign, verify
}
