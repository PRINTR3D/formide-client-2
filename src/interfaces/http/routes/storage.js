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
		client.storage.stat(req.params.filename).then((stats) => {
			return res.ok(stats)
		}).catch((err) => {
			if (err.name === 'fileNotFound') return res.notFound(err.message)
			return res.serverError(err)
		})
	})
	
	/**
	 * @api {get} /api/storage/:filename/download Storage:download
	 * @apiGroup Storage
	 * @apiDescription Download a G-code file from storage
	 * @apiVersion 2.0.0
	 */
	router.get('/:filename/download', function (req, res) {
		client.storage.stat(req.params.filename).then((info) => {
			client.storage.read(req.params.filename).then((storageStream) => {
				res.set('Content-Type', 'text/gcode')
				res.set('Content-Length', info.filesize)
				return storageStream.pipe(res)
			}).catch((err) => {
				if (err.name === 'fileNotFound') return res.notFound(err.message)
				return res.serverError(err)
			})
		}).catch((err) => {
			if (err.name === 'fileNotFound') return res.notFound(err.message)
			return res.serverError(err)
		})
	})
	
	/**
	 * @api {post} /api/storage Storage:upload
	 * @apiGroup Storage
	 * @apiDescription Upload new G-code file to storage
	 * @apiVersion 2.0.0
	 */
	router.post('/', function (req, res) {
		req.pipe(req.busboy)
		req.busboy.on('file', (field, file, filename) => {
			
			// write file to storage
			client.storage.write(filename, file).then((info) => {
				return res.ok({
					message: 'File uploaded',
					file: info,
					success: true
				})
			}).catch((err) => {
				if (err.name === 'invalidFiletype') return res.badRequest(err.message)
				return res.serverError(err)
			})
		})
	})
	
	/**
	 * @api {delete} /api/storage/:filename Storage:delete
	 * @apiGroup Storage
	 * @apiDescription Delete G-code file from storage
	 * @apiVersion 2.0.0
	 */
	router.delete('/:filename', function (req, res) {
		client.storage.remove(req.params.filename).then(() => {
			return res.ok({ message: 'File removed from storage' })
		}).catch(res.serverError)
	})
	
	return router
}
