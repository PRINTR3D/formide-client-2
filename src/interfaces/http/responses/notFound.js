/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: notFound.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:35:33+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

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
