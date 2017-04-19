/*
*	This code was created for Printr B.V. It is open source under the formide-client package.
*	Copyright (c) 2017, All rights reserved, http://printr.nl
*/

(function () {

	function MainController($rootScope, Printer, $socket, $location) {
		var vm = this;

		$socket.socket.on('printer.status', function (resource) {
			vm.printSpeed = 	Printer.$active.speedMultiplier;
			vm.flowRate = 	Printer.$active.flowRate;
			vm.fanSpeed = 	Printer.$active.fanSpeed;
		});

		function navigate(route){
			$location.path(route);
		}

		// exports
		angular.extend(vm, {
			printer: Printer
		});
	}

	MainController.$inject = [
		'$rootScope', 'Printer', '$socket', '$location'
	];


	angular
	.module('components.monitorPrint', [
		//
	])
	.controller('MonitorPrintController', MainController)
})();
