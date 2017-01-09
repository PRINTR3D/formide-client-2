/**
* @Author: chris
* @Date:   2017-01-08T17:28:30+01:00
* @Filename: materials.js
* @Last modified by:   chris
* @Last modified time: 2017-01-10T00:52:12+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = function (router, db, resourceName) {
  router.get(`/${resourceName.toLowerCase()}s`, function (req, res) {
    db[resourceName].find({ 'customProperties.preset': true }).then(res.ok).catch(res.serverError)
  })

  router.get(`/${resourceName.toLowerCase()}s/:id`, function (req, res) {
    db[resourceName].findOne({ [global.MONGO_ID_FIELD]: req.params.id, 'customProperties.preset': true }).then(res.ok).catch(res.serverError)
  })
}
