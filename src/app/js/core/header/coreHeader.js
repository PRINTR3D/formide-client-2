/*
*	This code was created for Printr B.V. It is open source under the formide-client package.
*	Copyright (c) 2017, All rights reserved, http://printr.nl
*/

(function () {
	function coreHeader() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'header/componentTemplate.html',
			scope: {
				maxWidth: '@'
			},
			transclude: true,
			controller: MainController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;
	}

	function MainController($rootScope, $location, $auth, Sidebar) {
		var vm = this;

		vm.mobilenavInvisible = true;

		vm.maxWidth = vm.maxWidth || 896;

		// private functions

		// public functions
		function navigate(route){
			$location.path(route);
		}

		function logout(){
			$auth.logout()
		}

		// exports
		angular.extend(vm, {
			navigate: navigate,
			logout: logout,
			sidebar: Sidebar
		});
	}


	MainController.$inject = [
		'$rootScope', '$location', '$auth', 'Sidebar'
	];

	angular
	.module('core.header', [
		//
	])
	.directive('coreHeader', coreHeader);
})();
