'use strict'

class PrinterNotConnectedError extends Error {
  constructor (port, extra) {
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = 'PrinterNotConnectedError'
    this.message = `No printer connected on port ${port}`
    if (extra) this.extra = extra
  }
}

module.exports = PrinterNotConnectedError
