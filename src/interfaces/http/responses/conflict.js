'use strict'

module.exports = function conflict (message, error) {
  var res = this.res
  var statusCode = 409
  var statusName = 'Conflict'

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
