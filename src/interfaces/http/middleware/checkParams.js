'use strict'

/**
 * Check required parameters middleware
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function checkParams (req, res, next) {
  req.checkParams = function (requiredParams, type) {
    type = type || 'body'
    for (var i = 0; i < requiredParams.length; i++) {
      if (!req[type].hasOwnProperty(requiredParams[i])) {
        return res.badRequest(`${requiredParams[i]} is a required ${type} parameter`)
      }
    }
    return true
  }
  return next()
}

module.exports = checkParams
