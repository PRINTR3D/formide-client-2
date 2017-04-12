/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a slice details list.
 */

(function () {
  function dashboardWebcam() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'dashboard-webcam/componentTemplate.html',
        scope: {
			showClose: '='
		},
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }


	function MainController(Printer, $api, $rootScope, $scope) {
	  var vm = this;

	  function webcamConnection(){
		  $rootScope.webcamError = false;
		  vm.webcamLoaded = false;

		  vm.webcamPath = window.PATH.socket = window.location.protocol + '//' + window.location.hostname +
				  					':8081/?action=stream&random=' + Math.round(Math.random() * 999999);
	  }

	  webcamConnection();


	  $scope.$on("formide.activePrinter:changed", function (event, resource) {
		  $rootScope.webcamError = false;
		  vm.webcamLoaded = false;
	  });




	  // exports
	  angular.extend(vm, {
		  printer: Printer
	  });
  }

  MainController.$inject = [
	  'Printer', '$api', '$rootScope', '$scope'
  ];

  angular
    .module('shared.dashboardWebcam', [
      //
    ])
    .directive('dashboardWebcam', dashboardWebcam);
})();
