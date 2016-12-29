'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

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
