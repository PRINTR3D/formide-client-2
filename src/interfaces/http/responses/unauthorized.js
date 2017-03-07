'use strict'

/**
 * @apiDefine Unauthorized
 * @apiError Unauthorized No Bearer token was found in the request header or an invalid token was passed.
 * @apiErrorExample {json} Unauthorized:
 *  {
 *    "statusCode": "401",
 *    "statusName": "Unauthorized",
 *    "message": "No Bearer token found"
 *  }
 */
module.exports = function unauthorized (message, error) {
  var res = this.res
  var statusCode = 401
  var statusName = 'Unauthorized'

  // Set status code
  res.status(statusCode)

  if (process.env.NODE_ENV === 'production') {
    error = undefined
  }

  return res.json({
    statusCode: statusCode,
    statusName: statusName,
    message: message,
    error: error
  })
}
