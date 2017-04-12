/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	'use strict';

	function MainController ($timeout, $auth, $location, $rootScope, $api) {
		var vm = this;

		if (window.localStorage.getItem("formide:setup")) {
			vm.setup = true;
			window.localStorage.removeItem("formide:setup")
		}

        function submitLoginForm() {
			vm.errorMessage = '';

			if(!vm.user || !vm.user.username || !vm.user.password){
				console.log('Login error');
				vm.errorMessage = 'Incorrect Login';

			}else{
				vm.loading = true;

	      		$auth.login(vm.user.username, vm.user.password)
				.then(function(result) {

					vm.loading = false;
					window.localStorage.setItem('formide.auth:token', result.token);
					$timeout(function() {
						window.location.href = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
						$rootScope.setSidebarShow();
					}, 1000);

	            },
	            function (e) {
					vm.loading = false;
					console.log('Login error');
					vm.errorMessage = 'Incorrect Login';
	            });
			}
      	};

		// exports
		angular.extend(vm, {
			submitLoginForm: submitLoginForm
		});
	}

	MainController.$inject = [
		'$timeout', '$auth', '$location', '$rootScope', '$api'
	];

	angular
	  .module('components.authLogin', [
	  	//
	  ])
	  .controller('AuthLoginController', MainController);
})();
