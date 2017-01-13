/**
* @Author: chris
* @Date:   2017-01-06T14:32:18+01:00
* @Filename: app.js
* @Last modified by:   chris
* @Last modified time: 2017-01-10T20:29:46+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

new Vue({
  el: '#app',
  data: {
    page: '',
    plugins: {}
  },
  methods: {
    goToPage: function (page) {
      this.page = page
    }
  },
  mounted () {
    this.$http.get('/api/system/plugins').then(function success (response) {
      this.plugins = response.data
    }, function error (errorResponse) {
      console.log('errorResponse', errorResponse)
    })
  }
})
