var apiRootURI = 'http://localhost:1337'

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
      username: '',
      password: ''
    },
	  cloudConnectURL: '',
	  cloudConnectError: '',
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
    cloudCode: function () {
      var self = this
      this.$http.get(apiRootURI + '/api/system/cloud/code').then(function success (response) {
	      self.cloudConnectURL = response.data.redirectURI
      }, function error (errorResponse) {
	      self.cloudConnectError = 'Cloud connect error: ' + errorResponse.data.message
      })
    },
    login: function () {
	    var self = this
      if (this.loginForm.email === '' || this.loginForm.password === '') {
	      self.loginError = 'Please enter an email address and password'
      } else {
	      self.loggingIn = true
	      self.$http.post(apiRootURI + '/api/auth/login', this.loginForm).then(function success (response) {
		      self.loggingIn = false
		      self.accessToken = response.data.token
		      self.goToPage('networks')
        }, function error (errorResponse) {
		      self.loggingIn = false
          if (errorResponse.status === 401) {
	          self.loginError = 'Incorrect credentials, please try again'
          } else {
	          self.loginError = errorResponse.data.message
          }
        })
      }
    },
    connect: function () {
      var self = this
      if (this.connectForm.ssid === '') {
	      this.connectError = 'Please select a network'
      } else {
	      this.connecting = true
	      this.$http.post(apiRootURI + '/api/network/connect', this.connectForm, {
          headers: {
            'Authorization': 'Bearer ' + this.accessToken
          }
        }).then(function success (response) {
		      self.connecting = false
		      self.ip = 'http://' + response.data.ip + ':8080'
		      self.goToPage('success')
        }, function error (errorResponse) {
		      self.connecting = false
          if (errorResponse.status === 401) {
	          self.goToPage('login')
          } else {
	          self.connectError = errorResponse.data.message
          }
        })
      }
    },
    findNetworks: function () {
      var self = this
	    var networkInterval = setInterval(function () {
		    self.$http.get(apiRootURI + '/api/network/list').then(function success (response) {
			    if (self.networkTry === 3) {
				    clearInterval(networkInterval)
			    }
			    if (response.data.length > 0) {
				    clearInterval(networkInterval)
				    self.networks = response.data
			    } else {
				    self.networkTry++
			    }
		    }, function error (errorResponse) {
			    if (self.networkTry === 3) {
				    clearInterval(networkInterval)
			    }
			    console.log('errorResponse', errorResponse)
			    self.networkTry++
		    })
	    }, 5000)
    }
  },
  mounted () {
    this.findNetworks()
	  this.cloudCode()
  }
})
