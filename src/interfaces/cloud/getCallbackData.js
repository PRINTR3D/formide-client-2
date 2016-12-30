/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: getCallbackData.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:34:42+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

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
