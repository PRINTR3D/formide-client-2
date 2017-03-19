'use strict'

const assert = require('assert')
const request = require('request')
const jwt = require('../utils/jwt')

// hardcoded JWT token for local proxy calls
const cloudToken = jwt.sign({
  id: 1,
  username: 'admin@local'
})

/**
 * Process proxy call from Formide Cloud
 * @param db
 * @param data
 * @param callback
 */
function proxy (client, data, callback) {
  assert(client, '[cloud / proxy] - client not passed')
  assert(client.config.http.api, '[cloud / proxy] - client.config.http.api not passed')
  assert(data, '[cloud / proxy] - data not passed')
  assert(data.url, '[cloud / proxy] - data.url not passed')

  var options = {
    method: data.method,
    uri: `http://127.0.0.1:${client.config.http.api}/${data.url}`,
    auth: {
      bearer: cloudToken
    }
  }

  if (data.method === 'GET') {
    options.qs = data.data
  } else {
    options.form = data.data
  }

  // Do a local HTTP request to get the data and respond back via socket
  request(options, function (err, response) {
    if (err) return callback(err)
    return callback(null, response)
  })
}

module.exports = proxy
