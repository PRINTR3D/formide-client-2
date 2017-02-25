'use strict'

module.exports = function forbidden (message, error) {
  var res = this.res
  var statusCode = 403
  var statusName = 'Forbidden'

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
