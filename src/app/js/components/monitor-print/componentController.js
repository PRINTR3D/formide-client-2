/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {

  function MainController($rootScope, Printer, $timeout, $socket, $location) {
	  var vm = this;

	  vm.webcamBtn = {
		  title: 'Overlay',
		  action: showFloatingWebcam
	  }

	  $socket.socket.on('printer.status', function (resource) {
		  vm.printSpeed = 	Printer.$active.speedMultiplier;
		  vm.flowRate = 	Printer.$active.flowRate;
		  vm.fanSpeed = 	Printer.$active.fanSpeed;
	  });


	  function navigate(route){
		  $location.path(route);
	  }

	  function showFloatingWebcam(){
		  $rootScope.floatingWebcam = !$rootScope.floatingWebcam;

		  if ($rootScope.floatingWebcam) {

			  var width = '325';
			  var height = '235';

			  var webcamPosition = JSON.parse(window.localStorage.getItem('formide.webcam:position'));

			  if (webcamPosition) {

				  var x = webcamPosition.x;
				  var y = webcamPosition.y;

				  var maxX = window.innerWidth;
				  var maxY = window.innerHeight;

				  if (x < 0) x = 0;
				  if (x > maxX - width) x = maxX - width;
				  if (y < 0) y = 0;
				  if (y > maxY - height) y = maxY - height;

				  $rootScope.floatingWebcamPosition = {
					  'top': y + 'px',
					  'left': x + 'px',
					  'width': width + 'px',
					  'height': height + 'px'
				  }

			  }else {
				  $rootScope.floatingWebcamPosition = {
					  'width': width + 'px',
					  'height': height + 'px'
				  }

			  }
		  }
	  }

	  // exports
	  angular.extend(vm, {
		  printer: Printer
	  });
  }

  MainController.$inject = [
	  '$rootScope', 'Printer', '$timeout', '$socket', '$location'
  ];


  angular
    .module('components.monitorPrint', [
      //
    ])
    .controller('MonitorPrintController', MainController)
})();
