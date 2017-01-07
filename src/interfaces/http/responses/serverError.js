/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: serverError.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T16:11:33+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = function badRequest (error) {
  var res = this.res
  var statusCode = 500
  var statusName = 'Server Error'

  // TODO: log error in client
  console.log(error)

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
