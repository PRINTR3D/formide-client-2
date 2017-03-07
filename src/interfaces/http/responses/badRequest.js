'use strict'

module.exports = function badRequest (message, error) {
  var res = this.res
  var statusCode = 400
  var statusName = 'Bad Request'

  // Set status code
  res.status(statusCode)

  if (process.env.NODE_ENV !== 'production') {
    error = undefined
  }

  return res.json({
    statusCode: statusCode,
    statusName: statusName,
    message: message,
    error: error
  })
}
