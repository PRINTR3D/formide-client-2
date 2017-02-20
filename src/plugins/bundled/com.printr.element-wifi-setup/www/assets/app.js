new Vue({
  el: '#app',
  data: {
    page: 'welcome',
    networks: [],
    networkTry: 1,
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
      if (this.loginForm.email === '' || this.loginForm.password === '') {
        this.loginError = 'Please enter an email address and password'
      } else {
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
      }
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
    var networkInterval = setInterval(function () {
      this.$http.get('/api/network/list').then(function success (response) {
        if (this.networkTry === 3) {
          clearInterval(networkInterval)
        }
        if (response.data.length > 0) {
          clearInterval(networkInterval)
          this.networks = response.data
        } else {
          this.networkTry++
        }
      }, function error (errorResponse) {
        if (this.networkTry === 3) {
          clearInterval(networkInterval)
        }
        console.log('errorResponse', errorResponse)
        this.networkTry++
      })
    }.bind(this), 5000)
  }
})
