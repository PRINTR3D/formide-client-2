
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	'use strict';

	function MainController($routeParams, $timeout, $location) {
		var vm = this;

		// private functions

		try {
			if ($routeParams.childRoute === undefined) {
				$timeout(function () {
					$location.path('manage/device');
				});
			}
		} catch (e) {

		}


		// public functions

		function navigate(route){
			$location.path(route);
		}

		// exports
		angular.extend(vm, {
			routeConfig: MainController.$routeConfig,
			navigate: navigate
		});
	}

	MainController.$inject = [
		'$routeParams', '$timeout', '$location'
	];

	MainController.$routeConfig = [
		{
			  path: '/',
			  redirectTo: '/'
		},
		{
			  path: '/device',
			  parent: '/manage',
			  component: {
				  subView: "manageDevice"
			  },
			  as: 'manageDevice'
		},
		{
			  path: '/device/update',
			  parent: '/manage',
			  component: {
				  subView: "manageDeviceUpdate"
			  },
			  as: 'manageDeviceUpdate'
		}
	];

	angular
		.module('components.manage', [
	  	//
	  ])
		.controller('ManageController', MainController);
})();
