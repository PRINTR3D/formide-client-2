'use strict'

const diskspace = require('diskspace')
const SPACE_BUFFER = 40000000 // 40MB should be free to store system info
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
