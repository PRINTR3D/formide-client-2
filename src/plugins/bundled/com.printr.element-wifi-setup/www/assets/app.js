/**
* @Author: chris
* @Date:   2017-01-06T14:32:18+01:00
* @Filename: app.js
* @Last modified by:   chris
* @Last modified time: 2017-01-06T20:12:20+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

new Vue({
  el: '#app',
  data: {
    page: 'welcome',
    networks: [],
    connectForm: {
      ssid: '',
      password: ''
    },
    loginForm: {
      email: '',
      password: ''
    },
    showAdvanced: false,
    connecting: false,
    connectError: '',
    ip: '',
    accessToken: '',
    loggingIn: false,
    loginError: ''
  },
  methods: {
    goToPage: function (page) {
      this.page = page
    },
    login: function () {
      this.loggingIn = true
      this.$http.post('/api/auth/login', this.loginForm).then(function success (response) {
        this.loggingIn = false
        this.accessToken = response.data.access_token
        this.goToPage('networks')
      }, function error (errorResponse) {
        this.loggingIn = false
        if (errorResponse.status === 401) {
          this.loginError = 'Incorrect credentials, please try again'
        } else {
          this.loginError = errorResponse.data.message
        }
      })
    },
    connect: function () {
      if (this.connectForm.ssid === '') {
        this.connectError = 'Please select a network'
      } else {
        this.connecting = true
        this.$http.post('/api/network/connect', this.connectForm, {
          headers: {
            'Authorization': 'Bearer ' + this.accessToken
          }
        }).then(function success (response) {
          this.connecting = false
          this.ip = 'http://' + response.data.ip + ':8080'
          this.goToPage('success')
        }, function error (errorResponse) {
          this.connecting = false
          if (errorResponse.status === 401) {
            this.goToPage('login')
          } else {
            this.connectError = errorResponse.data.message
          }
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
