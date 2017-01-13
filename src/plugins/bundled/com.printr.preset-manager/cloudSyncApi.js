/**
* @Author: chris
* @Date:   2017-01-10T19:49:31+01:00
* @Filename: cloudSyncApi.js
* @Last modified by:   chris
* @Last modified time: 2017-01-11T17:06:42+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const qs = require('qs')
const cloudURL = 'https://api.formide.com'
const accessToken = '50a85f464752ac3280bbdf6f0d924be72aa505fa9e5cd22b0af1955e5e65adba'
// const request = require('request')

module.exports = function (router, db) {
  router.get('/cloud/printers', function (req, res) {
    // const queryString = qs.stringify(req.query)
    // const requestURI = `${cloudURL}/preset/printers?access_token=${accessToken}&${queryString}`
    // console.log(requestURI)
    // request(requestURI, function (err, response, body) {
    //   if (err) return res.serverError(err)
    //   try {
    //     const printerPresets = JSON.parse(body)
    //     return res.ok({
    //       data: printerPresets,
    //       count: printerPresets.length,
    //       search: req.query
    //     })
    //   } catch (e) {
    //     return res.serverError(e)
    //   }
    // })
  })

  router.get('/cloud/printers/import', function (req, res) {

  })
}
