'use strict'

const assert = require('assert')
const request = require('request')
const co = require('co')

/**
 * Process proxy call from Formide Cloud
 * @param db
 * @param data
 * @param callback
 */
function proxy (client, data, callback) {
  assert(client, '[cloud / proxy] - client not passed')
  assert(client.db, '[cloud / proxy] - client.db not passed')
  assert(client.config.http.port, '[cloud / proxy] - client.config.http.port not passed')
  assert(data, '[cloud / proxy] - data not passed')
  assert(data.url, '[cloud / proxy] - data.url not passed')

  // add isAdmin to incoming proxy data if not found
  // TODO: add correct isAdmin to cloud proxy server
  data.isAdmin = data.isAdmin || false

  authenticate(client.db, data.isAdmin, function (err, accessToken) {
    if (err) return callback(err)

    var options = {
      method: data.method,
      uri: `http://127.0.0.1:${client.config.http.api}/${data.url}`,
      auth: {
        bearer: accessToken
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
  })
}

/**
 * Authenticate proxy call
 * @param db
 * @param callback
 */
function authenticate (db, isAdmin, callback) {
  co(function* () {
    let accessToken = yield db.AccessToken.findOne({ sessionOrigin: 'cloud' })

    if (!accessToken) {
      accessToken = yield db.AccessToken.create({
        sessionOrigin: 'cloud',
        isAdmin
      })
    }

    return callback(null, accessToken.token)
  }).then(null, callback)
}

module.exports = proxy
