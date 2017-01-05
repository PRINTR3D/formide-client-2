/**
* @Author: chris
* @Date:   2017-01-05T11:43:27+01:00
* @Filename: bashUtils.js
* @Last modified by:   chris
* @Last modified time: 2017-01-05T11:46:15+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const safePattern = /^[a-z0-9_\/\-.,?:@#%^+=\[\]]*$/i
const wrappablePattern = /^[a-z0-9_\/\-.,?:@#%^+=\[\]{}|&()<>; *']*$/i

module.exports.escape = arg => {
  if (safePattern.test(arg)) { return arg }

  if (wrappablePattern.test(arg)) {
    return `"${arg}"`
  }

  // use strong escaping with single quotes
  const result = arg.replace(/'+/g, val => {
        // One or two can be '\'' -> ' or '\'\'' -> ''
    if (val.length < 3) {
      return `'${val.replace(/'/g, "\\'")}'`
    }

    // more in a row, wrap in double quotes '"'''''"' -> '''''
    return `'"${val}"'`
  })

  return `'${result}'`
}
