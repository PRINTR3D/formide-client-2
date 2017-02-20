'use strict'

const jwt = require('../../../core/utils/jwt')

module.exports = function (client) {
	
	/**
   * JWT auth middleware
	 * @param req
	 * @param res
	 * @param next
	 * @returns {*}
	 */
  function jwtMiddleware (req, res, next) {
	  const authHeader = req.get('Authorization')
	  if (!authHeader) return res.unauthorized('No Bearer token found')
	
	  // split header
	  const authHeaderParts = authHeader.split(' ')
	  if (authHeaderParts.length !== 2) return res.unauthorized('No Bearer token found')
	
	  // find schema and Bearer
	  const schema = authHeaderParts[0]
	  const bearer = authHeaderParts[1]
	  if (schema !== 'Bearer') return res.unauthorized('No Bearer token found')
	
	  // verify Bearer token with JWT
	  const token = jwt.verify(bearer)
	  if (!token) return res.unauthorized('Could not validate Bearer')
    
    // find user and set session
		const user = client.auth.find(token.id, 'id')
		req.authenticated = true
		req.user = user
		return next()
  }

  return {
    jwt: jwtMiddleware
  }
}
