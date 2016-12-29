'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert = require('assert')
const tools = require('./tools')
const reference = require('katana-slicer/reference.json')

/**
 * Update a slice profile from a previous version or when it's incomplete
 * @param settings
 * @param version
 * @param cb
 */
function updateSliceProfile (settings, version, cb) {
  assert(settings, 'settings not passed')

  version = version || reference.version
  tools
    .updateSliceProfile(reference, version, settings)
    .then(function (updatedSliceProfile) {
      return cb(null, updatedSliceProfile)
    })
    .catch(cb)
}

module.exports = updateSliceProfile
