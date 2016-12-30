/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: tools.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:35:52+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const katanaTools = require('katana-tools')

/**
 * This module takes formide-tools and makes Promised based functions from it
 */
module.exports = {

  updateSliceProfile (reference, oldVersion, settings) {
    return new Promise((resolve, reject) => {
      katanaTools.updateSliceprofile(reference, oldVersion, settings, (err, fixedSettings, version) => {
        if (err) return reject(err)
        return resolve({
          settings: fixedSettings,
          version: version
        })
      })
    })
  },

  generateSlicerequestFromPrintjob (printJob, settings, reference) {
    return new Promise((resolve, reject) => {
      katanaTools.generateSlicerequestFromPrintjob(printJob, settings, reference, (err, sliceRequest) => {
        if (err) return reject(err)
        return resolve(sliceRequest)
      })
    })
  },

  createSliceProfileFromCura (curaSettings, reference) {
    return new Promise((resolve, reject) => {
      katanaTools.createSliceprofileFromCura(curaSettings, reference, (err, katanaSettings) => {
        if (err) return reject(err)
        return resolve(katanaSettings)
      })
    })
  },

  SliceRequest: katanaTools.SliceRequest
}
