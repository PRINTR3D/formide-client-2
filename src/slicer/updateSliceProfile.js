'use strict'

const assert = require('assert')
const reference = require('katana-slicer').reference
const updateSliceProfileToVersion = require('katana-slicer').generators.updateSliceProfileToVersion

/**
 * Update a slice profile from a previous version or when it's incomplete
 * @param settings
 * @param version
 * @param cb
 */
function updateSliceProfile (settings, version, cb) {
  assert(settings, 'settings not passed')

  version = version || reference.version
	
  try {
	  const updatedSliceProfile = updateSliceProfileToVersion(settings, version)
    return cb(null, updatedSliceProfile)
  } catch (e) {
    return cb(e)
  }
}

module.exports = updateSliceProfile
