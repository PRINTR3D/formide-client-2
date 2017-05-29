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
