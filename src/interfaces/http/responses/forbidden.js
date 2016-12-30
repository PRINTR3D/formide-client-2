/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: forbidden.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:35:29+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

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
