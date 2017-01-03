/**
* @Author: chris
* @Date:   2017-01-03T10:36:31+01:00
* @Filename: settings.js
* @Last modified by:   chris
* @Last modified time: 2017-01-03T10:38:14+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

module.exports = [
  {
    type: 'group',
    name: 'api',
    title: 'API settings',
    items: [
      {
        type: 'checkbox',
        name: 'enableSearch',
        title: 'Enable search',
        default: true
      }
    ]
  }
]
