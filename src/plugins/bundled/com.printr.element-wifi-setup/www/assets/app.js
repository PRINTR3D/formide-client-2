/**
* @Author: chris
* @Date:   2017-01-06T14:32:18+01:00
* @Filename: app.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T18:40:58+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

new Vue({
  el: '#app',
  data: {
    page: 'welcome',
    networks: [],
    networkSelect: {
      ssid: '',
      password: ''
    },
    showAdvanced: false,
    connecting: false,
    connectError: '',
    ip: ''
  },
  methods: {
    goToPage: function (page) {
      this.page = page
    },
    connect: function () {
      if (this.networkSelect.ssid === '') {
        this.connectError = 'Please select a network'
      } else {
        this.connecting = true
        this.$http.post('/api/network/connect', this.networkSelect).then(function success (response) {
          this.connecting = false
          this.ip = 'http://' + response.data.ip + ':8080'
          this.goToPage('success')
        }, function error (errorResponse) {
          this.connectError = errorResponse.data
          this.connecting = false
        })
      }
    }
  },
  mounted () {
    this.$http.get('/api/network/list').then(function success (response) {
      this.networks = response.data
    }, function error (errorResponse) {
      console.log('errorResponse', errorResponse)
    })
  }
})
