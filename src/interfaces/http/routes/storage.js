'use strict'

// const co = require('co')
const assert = require('assert')
const router = require('express').Router()

module.exports = function (client) {
	
	assert(client)
	assert(client.storage)
	
	/**
	 * @api {get} /api/storage Storage:list
	 * @apiGroup Storage
	 * @apiDescription List stored G-code files
	 * @apiVersion 2.0.0
	 */
	router.get('/', function (req, res) {
		client.storage.list().then((files) => {
			return res.ok(files)
		}).catch(res.serverError)
	})
	
	/**
	 * @api {get} /api/storage/:filename Storage:single
	 * @apiGroup Storage
	 * @apiDescription Get info about a single stored G-code file
	 * @apiVersion 2.0.0
	 */
	router.get('/:filename', function (req, res) {
		client.storage.stats(req.params.filename).then((stats) => {
			return res.ok(stats)
		}).catch(res.serverError)
	})
	
	/**
	 * @api {get} /api/storage/:filename/download Storage:download
	 * @apiGroup Storage
	 * @apiDescription Download a G-code file from storage
	 * @apiVersion 2.0.0
	 */
	router.get('/:filename/download', function (req, res) {
		// TODO: download file
	})
	
	/**
	 * @api {post} /api/storage Storage:upload
	 * @apiGroup Storage
	 * @apiDescription Upload new G-code file to storage
	 * @apiVersion 2.0.0
	 */
	router.post('/', function (req, res) {
		// TODO: upload new gcode file
	})
	
	/**
	 * @api {delete} /api/storage/:filename Storage:delete
	 * @apiGroup Storage
	 * @apiDescription Delete G-code file from storage
	 * @apiVersion 2.0.0
	 */
	router.delete('/:filename', function (req, res) {
		// TODO: remove file
	})
	
	return router
}
