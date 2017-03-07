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
      if (!req[type].hasOwnProperty(requiredParams[i]) || req[type][requiredParams[i]] === '') {
        return res.badRequest(`Missing ${type} parameter: ${requiredParams[i]}`)
      }
    }
	  return next()
  }
}

module.exports = checkParams
