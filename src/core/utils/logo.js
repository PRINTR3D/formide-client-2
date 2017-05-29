/**
* @Author: chris
* @Date:   2016-12-18T17:20:10+01:00
* @Filename: logo.js
* @Last modified by:   chris
* @Last modified time: 2016-12-30T14:34:17+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

function logLogo (config) {
  console.log(`Starting Formide client...`)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log(`Version:     ${config.version}`)
  console.log(`Environment: ${config.env}`)
  console.log(`API port:    ${config.http.api}`)
  console.log(`UI port:     ${config.http.www}`)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log(' ')
}

module.exports = logLogo
