/**
* @Author: chris
* @Date:   2017-01-08T17:28:30+01:00
* @Filename: materials.js
* @Last modified by:   chris
* @Last modified time: 2017-01-08T20:04:18+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = function (router, db) {
  router.get('/materials', function (req, res) {
    db.Material.find({ 'customProperties.preset': true }).then(res.ok).catch(res.serverError)
  })

  router.get('/materials/:id', function (req, res) {
    db.Material.findOne({ [global.MONGO_ID_FIELD]: req.params.id }).then(res.ok).catch(res.serverError)
  })
}
