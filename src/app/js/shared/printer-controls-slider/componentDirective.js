(function () {
  function printerControlsSlider() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-controls-slider/componentTemplate.html',
        scope: {
            min: '@',
            max: '@',
            step: '@',
            value: '=',
            prettyMin: '@',
            prettyMax: '@',
            inputField: '@',
			gcode: '=',
			disableInput: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($scope, $rootScope, printerCtrl) {
      var vm = this;

      vm.min = vm.min || 0;
      vm.max = vm.max || 100;
      vm.step = vm.step || 1;
      vm.value = vm.value || 0;
      vm.inputField = vm.inputField || false;
	  vm.disableInput = vm.disableInput || false;

      // private functions

      // public functions

	  function postTuneGcode(){

		  if (vm.gcode == 'M106 S' && typeof vm.value !== 'undefined' && vm.value != null) {
		  	var finalValue = vm.value * 255 / 100 || 0;
			printerCtrl.tune(vm.gcode + finalValue);
		  }
		  else if(vm.gcode && typeof vm.value !== 'undefined' && vm.value != null) {
		  	printerCtrl.tune(vm.gcode + vm.value)
		  }

		  $rootScope.$emit("formide.printer:tune",true);
	  }

      // exports
      angular.extend(vm, {
	      postTuneGcode: postTuneGcode,
		  printerCtrl: printerCtrl
      });
  }


  MainController.$inject = [
      '$scope', '$rootScope', 'printerCtrl'
  ];

  angular
    .module('shared.printerControlsSlider', [
      //
    ])
    .directive('printerControlsSlider', printerControlsSlider);
})();
