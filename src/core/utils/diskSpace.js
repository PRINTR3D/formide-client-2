/**
* @Author: chris
* @Date:   2017-01-07T01:48:10+01:00
* @Filename: diskSpace.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T02:09:56+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const diskspace = require('diskspace')
const SPACE_BUFFER = 157412106240 // 40MB should be free for slice to store resulting G-code
const StorageFullError = require('./storageFullError')

module.exports = function (client) {
  function getDiskSpace () {
    return new Promise(function (resolve, reject) {
      diskspace.check(client.config.paths.storageDir, function (err, total, free) {
        if (err) return reject(err)
        return resolve({ total, free })
      })
    })
  }

  function hasSpaceLeft () {
    return new Promise(function (resolve, reject) {
      getDiskSpace().then(function (result) {
        if (result.free > SPACE_BUFFER) {
          return resolve(result.free)
        } else {
          return reject(new StorageFullError())
        }
      }).catch(reject)
    })
  }

  return {
    getDiskSpace, hasSpaceLeft
  }
}
