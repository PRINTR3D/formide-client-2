/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: ok.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:35:36+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = function ok (data) {
  var res = this.res
  var statusCode = 200

  // Set status code
  res.status(statusCode)

  return res.json(data)
}
