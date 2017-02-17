'use strict'

/**
 * Check required parameters middleware
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function checkParams (req, res, next) {
  req.checkParams = function (requiredParams) {
    for (var i = 0; i < requiredParams.length; i++) {
      if (!req.body.hasOwnProperty(requiredParams[i])) {
        return res.badRequest(`${requiredParams[i]} is a required parameter`)
      }
    }
    return true
  }
  return next()
}

module.exports = checkParams
