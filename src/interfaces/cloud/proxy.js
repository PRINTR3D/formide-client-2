/**
* @Author: chris
* @Date:   2016-12-17T13:55:08+01:00
* @Filename: proxy.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T10:15:25+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

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

  authenticate(client.db, function (err, accessToken) {
    if (err) { return callback(err) }

    var options = {
      method: data.method,
      uri: `http://127.0.0.1:${client.config.http.port}/${data.url}`,
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
    request(options, function (error, response) {
      if (error) {
        return callback(error)
      }

      return callback(null, response)
    })
  })
}

/**
 * Authenticate proxy call
 * @param db
 * @param callback
 */
function authenticate (db, callback) {
  co(function*() {
    let accessToken = yield db.AccessToken.findOne({ sessionOrigin: 'cloud' })

    if (!accessToken) {
      accessToken = yield db.AccessToken.create({
        sessionOrigin: 'cloud',
        permissions: ['owner', 'admin']
      })
    }

    return callback(null, accessToken.token)
  }).then(null, callback)
}

module.exports = proxy
