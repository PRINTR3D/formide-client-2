'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

/**
 * Process data to correct structure before sending back to Formide
 * This is according to the documented Formide Cloud comm protocol
 * @param callbackId
 * @param err
 * @param result
 */
function getCallbackData (callbackId, err, result) {
  const data = { _callbackId: callbackId }

  if (err) {
    data.error = { message: err.message }
  } else {
    data.result = result
  }

  return data
}

module.exports = getCallbackData
