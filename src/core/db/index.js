'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const assert = require('assert')
const mongoose = require('mongoose')

class DB {

  // TODO: figure out best database to use
  constructor (client) {
    assert(client.config.db.connectionString, '[db] - client.config.db.connectionString not passed')

    mongoose.connect(client.config.db.connectionString)

    const db = mongoose.connection
    db.on('error', function (err) {
      client.log(`[db] - Error connecting to MongoDB: ${err.message}`, 1, 'error')
      process.exit(1)
    })
    db.on('open', function () {
      client.log('[db] - Connected to MongoDB', 1, 'info')
    })

    const models = {
      AccessToken: require('./models/accessToken'),
      File: require('./models/file'),
      Material: require('./models/material'),
      Printer: require('./models/printer'),
      PrintJob: require('./models/printJob'),
      QueueItem: require('./models/queueItem'),
      SliceProfile: require('./models/sliceProfile'),
      User: require('./models/user')
    }

    return models
  }
}

module.exports = DB
