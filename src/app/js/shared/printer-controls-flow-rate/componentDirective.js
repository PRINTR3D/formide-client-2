/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function printerControlsFlowRate() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-controls-flow-rate/componentTemplate.html',
        scope: {
          size: '=',
          max: '=',
          speed: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($scope) {
      var vm = this;

      vm.size = vm.size || 0;
      vm.max = vm.max || 0;
      vm.speed = vm.speed || 100;

	  $scope.$watch('vm.speed', function() {
		  if (vm.speed == 0) {
		  	vm.duration = '0s'
		  }else {
		  	vm.duration = (1.01 - vm.speed / vm.max) * 2 + 's';
		  }
	  });


      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    '$scope'
  ];

  angular
    .module('shared.printerControlsFlowRate', [
      //
    ])
    .directive('printerControlsFlowRate', printerControlsFlowRate);
})();
