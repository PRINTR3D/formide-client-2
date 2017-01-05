/**
* @Author: chris
* @Date:   2017-01-05T02:05:48+01:00
* @Filename: checkParams.js
* @Last modified by:   chris
* @Last modified time: 2017-01-05T20:13:58+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

function checkParams (req, res, next) {
  req.checkParams = function (requiredParams) {
    for (var i = 0; i < requiredParams.length; i++) {
      if (!req.body.hasOwnProperty(requiredParams[i])) {
        return res.badRequest(`${requiredParams[i]} is a required parameter`)
      }
    }
    return true
  }
  return next()
}

module.exports = checkParams
