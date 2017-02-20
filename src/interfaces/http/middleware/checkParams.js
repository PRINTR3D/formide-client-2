'use strict'

/**
 * Check required parameters
 * @param requiredParams
 * @param type
 * @returns {Function}
 */
function checkParams (requiredParams, type) {
  return function (req, res, next) {
    type = type || 'body'
    for (var i = 0; i < requiredParams.length; i++) {
      if (!req[type].hasOwnProperty(requiredParams[i])) {
        return res.badRequest(`${requiredParams[i]} is a required ${type} parameter`)
      }
    }
	  return next()
  }
}

module.exports = checkParams
