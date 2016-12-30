/**
* @Author: chris
* @Date:   2016-12-30T14:01:15+01:00
* @Filename: printerNotConnectedError.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:33:30+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

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
