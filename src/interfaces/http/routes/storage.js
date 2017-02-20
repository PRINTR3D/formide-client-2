'use strict'

// const co = require('co')
const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
	
	assert(client)
	assert(client.storage)
	
	router.get('/', function (req, res) {
		client.storage.list().then((files) => {
			return res.ok(files)
		}).catch(res.serverError)
	})
	
	router.get('/:filename', function (req, res) {
		// TODO: get single file info
	})
	
	router.get('/:filename/download', function (req, res) {
		// TODO: download file
	})
	
	router.post('/', function (req, res) {
		// TODO: upload new gcode file
	})
	
	router.delete('/:filename', function (req, res) {
		// TODO: remove file
	})
	
	return router
}
