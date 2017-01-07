/**
* @Author: chris
* @Date:   2016-12-18T17:11:52+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T15:57:27+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const mongoose = require('mongoose')

class DB {

  // TODO: figure out best database to use
  constructor (client) {
    assert(client.config.db.connectionString, 'client.config.db.connectionString not passed')

    mongoose.connect(client.config.db.connectionString)

    const db = mongoose.connection
    db.on('error', function (err) {
      client.log(`Error connecting to MongoDB: ${err.message}`, 'error')
      process.exit(1)
    })
    db.on('open', function () {
      client.log('Connected to MongoDB', 'info')
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

    // TMP
    const bcrypt = require('bcrypt')

    bcrypt.genSalt(10, function (err, salt) {
      if (err) console.log(err)
      bcrypt.hash('admin', salt, function (err, hash) {
        if (err) console.log(err)
        models.User.findOneAndUpdate({
          email: 'admin@local'
        }, {
          email: 'admin@local',
          password: hash,
          isAdmin: true
        }, {
          upsert: true,
          new: true
        }).then(function (user) {
          console.log('user created', user)
        })
      })
    })

    return models
  }
}

module.exports = DB
