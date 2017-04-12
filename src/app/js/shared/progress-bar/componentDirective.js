/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a progress bar based on a current and a max value.
 */

(function () {
  function progressBar() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'progress-bar/componentTemplate.html',
        scope: {
            valuenow: '@',
            valuemax: '@'
        },
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      vm.valuemax = vm.valuemax || 100;

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
    .module('shared.progressBar', [
      //
    ])
    .directive('progressBar', progressBar);
})();
