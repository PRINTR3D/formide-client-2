'use strict'

const diskspace = require('storage-device-info')
const SPACE_BUFFER = 40000000 // 40MB should be free to store system info
const MB_TO_BYTES = 1000000
const StorageFullError = require('./storageFullError')

module.exports = function (client) {
  function getDiskSpace () {
    return new Promise(function (resolve, reject) {
      diskspace.getPartitionSpace(client.config.paths.storageDir, function (err, space) {
        if (err) return reject(err)
        return resolve({
          total: space.totalMegaBytes * MB_TO_BYTES,
          free: space.freeMegaBytes * MB_TO_BYTES
        })
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
