/**
* @Author: chris
* @Date:   2016-12-17T14:17:52+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T11:40:45+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const io = require('socket.io')
const ws = require('nodejs-websocket')

class Ws {

  constructor (client) {
    const self = this
    this._client = client

    // Emit all system events to connected native UI socket connections
    // These are not compatible with socket.io, hence the separate websocket library
    ws.createServer(function (conn) {
      // Format socket messages
      function forwardEvents (data) {
        data = data || {}
        data.device = 'LOCAL'
        conn.sendText(JSON.stringify({
          channel: this.event,
          data: data
        }))
      }

      conn.on('text', function (message) {
        try {
          const data = JSON.parse(message)

          if (data.channel === 'authenticate') {
            self.authenticate(data.data.accessToken, function (err, accessToken) {
              if (err) {
                client.log(`[ws] - Native UI socket error: ${err.message}`, 1, 'error')
              }

              conn.sendText(JSON.stringify({
                channel: 'authenticate',
                data: {
                  success: true,
                  message: 'Authentication successful',
                  notification: false
                }
              }))

              client.events.onAny(forwardEvents)
            })
          }
        } catch (e) {
          client.log(`[ws] - Native UI socket error: ${e.message}`, 1, 'error')
        }
      })

      conn.on('close', function () {
        client.events.offAny(forwardEvents)
        client.log(`[ws] - Native UI socket disconnected`, 2, 'info')
      })

      conn.on('error', function (err) {
        client.log(`[ws] - Native UI socket error: ${err.message}`, 1, 'error')
      })
    })

    const socketIO = io.listen(client.http.server)

    // Emit all system events to connected socket.io clients
    socketIO.on('connection', function (socket) {
      function forwardSocketEvents (data) {
        socket.emit(this.event, data)
      }

      socket.on('authenticate', function (data, callback) {
        self.authenticate(data.accessToken, function (err, accessToken) {
          if (err) {
            callback({ success: false, message: err.message })
            return socket.disconnect()
          }

          if (!accessToken) {
            callback({ success: false, message: 'Access token not found. Please provide a valid access token.' })
            return socket.disconnect()
          }

          client.events.onAny(forwardSocketEvents)

          // respond to client
          callback({
            success: true,
            message: 'Authentication successful'
          })
        })
      })

      socket.on('error', function (err) {
        client.log(`[ws] - Local socket.io error: ${err.message}`, 1, 'error')
      })

      socket.on('disconnect', function () {
        client.events.offAny(forwardSocketEvents)
        client.log(`[ws] - Local socket.io disconnected`, 2, 'info')
      })
    })
  }

  authenticate (token, callback) {
    this._client.db.AccessToken.findOne({ token }, callback)
  }
}

module.exports = Ws
