/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: serverError.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:35:39+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = function badRequest (error) {
  var res = this.res
  var statusCode = 500
  var statusName = 'Server Error'

  // TODO: log error
  // FormideClient.log.error(error)

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
