/**
* @Author: chris
* @Date:   2017-01-07T02:07:09+01:00
* @Filename: storageFullError.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T02:07:43+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

class StorageFullError extends Error {
  constructor (port, extra) {
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = 'StorageFull'
    this.message = 'There is not enough storage left to perform this action'
    if (extra) this.extra = extra
  }
}

module.exports = StorageFullError
