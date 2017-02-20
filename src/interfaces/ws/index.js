'use strict'

const io = require('socket.io')
const ws = require('nodejs-websocket')
const jwt = require('../../core/utils/jwt')

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
                client.logger.log(`Native UI socket error: ${err.message}`, 'error')
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
          client.logger.log(`Native UI socket error: ${e.message}`, 'error')
        }
      })

      conn.on('close', function () {
        client.events.offAny(forwardEvents)
        client.logger.log(`Native UI socket disconnected`, 'info')
      })

      conn.on('error', function (err) {
        client.logger.log(`Native UI socket error: ${err.message}`, 'error')
      })
    })

    const socketIO = io.listen(client.http.httpServer)

    // Emit all system events to connected socket.io clients
    socketIO.on('connection', function (socket) {
      function forwardSocketEvents (eventName, eventData) {
        socket.emit(eventName, eventData)
      }

      socket.on('authenticate', function (data, callback) {
        self.authenticate(data.accessToken, function (err, accessToken) {
          if (err) {
            if (typeof callback === 'function') callback({ success: false, message: err.message })
            return socket.disconnect()
          }

          if (!accessToken) {
            if (typeof callback === 'function') callback({ success: false, message: 'Access token not found. Please provide a valid access token.' })
            return socket.disconnect()
          }

          client.events.onAny(forwardSocketEvents)

          client.logger.log(`Local socket.io connected`, 'info')

          // respond to client
          if (typeof callback === 'function') {
            callback({
              success: true,
              message: 'Authentication successful'
            })
          }
        })
      })

      socket.on('error', function (err) {
        client.logger.log(`Local socket.io error: ${err.message}`, 'error')
      })

      socket.on('disconnect', function () {
        client.events.offAny(forwardSocketEvents)
        client.logger.log(`Local socket.io disconnected`, 'info')
      })
    })
  }

  authenticate (token, callback) {
    // verify jwt token
    token = jwt.verify(token)
    if (!token) return callback(null, false)
	
	  // find user and set session
	  this._client.auth.find(token.id, 'id').then((user) => {
		  if (!user) return callback(null, false)
		  return callback(null, true)
	  }).catch((err) => {
      return callback(err)
	  })
  }
}

module.exports = Ws
