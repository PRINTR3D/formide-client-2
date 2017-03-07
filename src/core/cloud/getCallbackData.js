'use strict'

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
