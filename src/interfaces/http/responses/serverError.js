'use strict'

module.exports = function serverError (error) {
  var res = this.res
  var statusCode = 500
  var statusName = 'Server Error'
  
  console.log('HTTP response error:', error)

  // Set status code
  res.status(statusCode)

  if (process.env.NODE_ENV === 'production') {
    return res.json({
      statusCode: statusCode,
      statusName: statusName,
      message: error.message
    })
  } else {
    return res.json({
      statusCode: statusCode,
      statusName: statusName,
      message: error.message,
      error: error,
      stack: error.stack
    })
  }
}
