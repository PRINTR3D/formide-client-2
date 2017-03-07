'use strict'

const client = require('../app')

// load virtual printer plugin needed for testing
client.plugins.loadPlugin(`${__dirname}/plugins/com.printr.virtual-printer`)

// manually load tests to prevent wrong order and inject client instance
// core
require('./tests/core/auth.test')(client)
require('./tests/core/drivers/printerCommandTemplate.test')(client)

// routes
require('./tests/routes/auth.test')(client)
// require('./tests/routes/network.test')(client) // TODO: network list test is slow
require('./tests/routes/printer.test')(client)
require('./tests/routes/storage.test')(client)
require('./tests/routes/update.test')(client)

// websockets
require('./tests/websocket/index.test')(client)

// cloud
// require('./tests/cloud/downloadGcodeFromCloud.test')(client) // TODO: slow test