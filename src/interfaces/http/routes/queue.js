'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
	assert(client, '[http] - client not passed in printer router')
	assert(http, '[http] - http not passed in printer router')

	/**
	 * @api {get} /api/queue Queue:list
	 * @apiGroup Queue
	 * @apiDescription Find cloud queue for port
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 *
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 */
	router.get('/', http.checkAuth.jwt, http.checkParams(['port'], 'query'), function (req, res) {
		client.cloud.getCloudQueue(decodeURIComponent(req.query.port)).then((response) => {
			if (response.statusCode !== 200) return res.status(response.statusCode).ok(response.body)
			return res.ok(response.body)
		}).catch(res.serverError)
	})
	
	/**
	 * @api {post} /api/queue/:queueItemId/print
	 * @apiGroup Queue
	 * @apiDescription Print a cloud queue item
	 * @apiVersion 1.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 *
	 * @apiParam {String} queueItemId The cloud ID of the queue item (part of the GET /api/queue response).
	 * @apiParam {String} port Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.
	 * @apiParam {String} gcode The name of the G-code file (part of the GET /api/queue response).
	 */
	router.post('/:queueItemId/print', http.checkAuth.jwt, http.checkParams(['port', 'gcode']), function (req, res) {
		client.cloud.printGcodeFromCloud(req.params.queueItemId, req.params.gcode, req.query.port).then((response) => {
			return res.ok(response)
		}).catch((err) => {
			if (err && err.name === 'printerNotConnectedError') return res.notFound(err.message)
			else if (err && err.name === 'printerActionNotAllowed') return res.conflict(err.message)
			else if (err) return res.serverError(err)
		})
	})

	return router
}
