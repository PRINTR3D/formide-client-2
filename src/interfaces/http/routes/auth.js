'use strict'

// const co = require('co')
// const assert = require('assert')
const router = require('express').Router()

module.exports = function (client, http) {
	
	router.post('/login', function (req, res) {
		console.log(req.body)
		return res.ok({
			success: true
		})
	})
	
	return router
}
