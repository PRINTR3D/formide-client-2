'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

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
