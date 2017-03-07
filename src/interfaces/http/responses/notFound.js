'use strict'

/**
 * @apiDefine NotFound
 * @apiError NotFound The requested path or resource does not exist.
 * @apiErrorExample {json} NotFound:
 *  {
 *    "statusCode": "404",
 *    "statusName": "NotFound",
 *    "message": "Could not find resource"
 *  }
 */
module.exports = function notFound (message, error) {
  var res = this.res
  var statusCode = 404
  var statusName = 'Not Found'

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
