/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function printerControlsFan() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-controls-fan/componentTemplate.html',
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

  function MainController() {
      var vm = this;

      vm.size = vm.size || 0;
      vm.max = vm.max || 0;
      vm.speed = vm.speed || 100;

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.printerControlsFan', [
      //
    ])
    .directive('printerControlsFan', printerControlsFan);
})();
