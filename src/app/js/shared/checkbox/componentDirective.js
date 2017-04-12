/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a slice details list.
 */

(function () {
  function checkbox() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'checkbox/componentTemplate.html',
        scope: {
			checkboxModel: '=',
			checkboxLabelLeft: '=?',
			checkboxLabelRight: '=?',
			checkboxDisabled: '=?',
			checkboxCallback: '=?',
			checkboxParameters: '=?'
		},
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($timeout) {
      var vm = this;

      // private functions

      // public functions

	  function checkboxClick(){
		  if (!vm.checkboxDisabled) {
		  	vm.checkboxModel = !vm.checkboxModel;

			$timeout(function () {
				if (vm.checkboxCallback) {
					vm.checkboxCallback(vm.checkboxParameters);
				}
			});
		  }
	  }

      // exports
      angular.extend(vm, {
        checkboxClick: checkboxClick
      });
  }


  MainController.$inject = [
    '$timeout'
  ];

  angular
    .module('shared.checkbox', [
      //
    ])
    .directive('checkbox', checkbox);
})();
