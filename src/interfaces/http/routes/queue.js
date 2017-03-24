'use strict'

const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
	assert(client, '[http] - client not passed in printer router')
	assert(http, '[http] - http not passed in printer router')

	/**
	 * @api {post} /api/queue Queue:list
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

	return router
}
