
 /*
  *	This code was created for Printr B.V. It is open source under the formide-client package.
  *	Copyright (c) 2017, All rights reserved, http://printr.nl
  */

 (function () {

   function MainController($api, $location, $timeout, $notification) {

 	  var vm = this;

	  getNetworkStatus();

	  function getNetworkStatus() {
		  $api.get('/network/status')
		  .then(function(status) {
			  if (status.isConnected && status.publicIp) {
				  getConnectCode();
			  }
			  else if (status.isConnected) {
			  	  vm.connectSetupStep = 'network-no-internet';
			  }
			  else if (status.isHotspot) {
			  	  getSSIDs();
			  }
			  else {
				  vm.connectSetupStep = 'custom-device-wifi';
			  }
		  });
	  }


	  function getSSIDs() {
		  $api.get('/network/list')
		  .then(function(response) {
			  vm.ssids = response;
			  vm.connectSetupStep = 'device-wifi';
		  }, function(err){
			  if (err.statusCode == 501) {
				  vm.connectSetupStep = 'custom-device-wifi';
			  }
		  });
	  }


	  function connectWifi() {
		  vm.connecting = true;
		  $api.post('/network/connect', {ssid: vm.wifi.ssid, password: vm.wifi.password})
		  .then(function(response) {
			  $notification.addNotification({
				  title: 'Settings Saved',
				  message: 'Wi-Fi Settings Saved',
				  channel: 'system',
				  type: 'success'
			  });
			  vm.connecting = false;
			  vm.connectSetupStep = '';
			  getNetworkStatus();
		  }, function(e) {
			  vm.wifiError = e.message;
			  vm.connecting = false;
		  });
	  }


	  function getConnectCode(){
		  vm.connectSetupStep = 'connect-formide';

		  vm.connecting = true;
		  vm.connectingError = false;

		  $api
		  .get('/system/cloud/code')
		  .then(function(response) {

			  vm.connecting = false;
			  vm.connectURL = response.redirectURI;

		  }, function(e){
			  vm.connecting = false;
			  vm.connectingError = e.message;
		  });
	  }


	  function connectToFormide(){

		  vm.connecting = true;
		  vm.connectingError = false;
		  window.location = vm.connectURL;

		  $timeout(function () {
			  window.stop();
			  vm.connecting = false;
			  vm.connectingError = "Ensure that you are connected to the Internet";
			  vm.connectURL = response.redirectURI;
		  }, 15000);
	  }


 	  // exports
 	  angular.extend(vm, {
		  connectToFormide: connectToFormide,
		  connectWifi: connectWifi
 	  });
   }

   MainController.$inject = [
	   '$api', '$location', '$timeout', '$notification'
   ];


   angular
     .module('components.connect', [
       //
     ])
     .controller('ConnectController', MainController)
 })();
