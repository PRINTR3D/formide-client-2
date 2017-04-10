'use strict'

// const co = require('co')
const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {

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
	 * @api {get} /api/storage/diskspace Storage:diskspace
	 * @apiGroup Storage
	 * @apiDescription Get the used and remaining disk space
	 * @apiVersion 2.0.0
	 *
	 * @apiSuccessExample {json} 200
	 *    {
	 *      "total": 12345,
	 *      "free": 1234
	 *    }
	 */
	router.get('/diskspace', function (req, res) {
		client.storage.getDiskSpace().then((diskSpace) => {
			return res.ok(diskSpace)
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
	router.get('/:filename/download', http.checkAuth.jwt, function (req, res) {
		client.storage.stat(req.params.filename).then((info) => {
			client.storage.read(req.params.filename).then((storageStream) => {
				res.set('Content-Type', 'text/gcode')
				res.set('Content-Length', info.filesize)
				return storageStream.pipe(res)
			}).catch((err) => {
				if (err.name === 'fileNotFound') return res.notFound(err.message)
				return res.serverError(err)
			})
		})
		.catch((err) => {
			if (err.name === 'fileNotFound') return res.notFound(err.message)
			return res.serverError(err)
		})
	})

	/**
	 * @api {post} /api/storage Storage:upload
	 * @apiGroup Storage
	 * @apiDescription Upload new G-code file to storage
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 */
	router.post('/', http.checkAuth.jwt, function (req, res) {
    if (req.busboy) {
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
  				  if (err.name === 'storageFull') return res.conflict(err.message)
  				  return res.serverError(err)
  			  })
  		  })
	    
	    // pipe file stream
	    req.pipe(req.busboy)
    }
	})

	/**
	 * @api {delete} /api/storage/:filename Storage:delete
	 * @apiGroup Storage
	 * @apiDescription Delete G-code file from storage
	 * @apiVersion 2.0.0
	 * @apiHeader {String} Authentication Valid Bearer JWT token
	 */
	router.delete('/:filename', http.checkAuth.jwt, function (req, res) {
		client.storage.remove(req.params.filename).then(() => {
			return res.ok({ message: 'File removed from storage' })
		}).catch((err) => {
			if (err.name === 'fileNotFound') return res.notFound(err.message)
			return res.serverError(err)
		})
	})

	return router
}
