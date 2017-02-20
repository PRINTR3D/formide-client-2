'use strict'

const client = require('../app')

// manually load tests to prevent wrong order and inject client instance
require('./tests/auth.test')(client)
require('./tests/printerCommandTemplate.test')(client)
require('./tests/routes/auth.test')(client)