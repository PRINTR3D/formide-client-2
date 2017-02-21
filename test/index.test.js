'use strict'

const client = require('../app')

// manually load tests to prevent wrong order and inject client instance

// core
require('./tests/core/auth.test')(client)
require('./tests/core/drivers/printerCommandTemplate.test')(client)

// routes
require('./tests/routes/auth.test')(client)
require('./tests/routes/network.test')(client)

// websockets
require('./tests/websocket/index.test')(client)

// plugins
require('./tests/plugins/com.printr.virtual-printer.test')(client)