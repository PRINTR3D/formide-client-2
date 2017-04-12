/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Similar to progress-bar, creates a temperature bar based on a current-, target- and max value.
 */

(function () {
  function temperatureBar() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'temperature-bar/componentTemplate.html',
        scope: {
            valuenow: '@',
            valuetarget: '@',
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

      // private functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.temperatureBar', [
      //
    ])
    .directive('temperatureBar', temperatureBar);
})();
