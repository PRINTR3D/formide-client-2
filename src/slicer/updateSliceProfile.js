/**
* @Author: chris
* @Date:   2016-12-17T13:16:34+01:00
* @Filename: updateSliceProfile.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:35:57+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

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
