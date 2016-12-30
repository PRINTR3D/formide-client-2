/**
* @Author: chris
* @Date:   2016-12-30T14:52:01+01:00
* @Filename: notImplemented.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:53:07+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = function notImplemented (message, error) {
  var res = this.res
  var statusCode = 501
  var statusName = 'Not Implemented'

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
