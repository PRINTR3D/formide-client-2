'use strict'

class StorageFullError extends Error {
  constructor (extra) {
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = 'StorageFull'
    this.message = 'There is not enough storage left to perform this action'
    if (extra) this.extra = extra
  }
}

module.exports = StorageFullError
