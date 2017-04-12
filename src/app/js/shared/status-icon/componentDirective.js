/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function statusIcon() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'status-icon/componentTemplate.html',
        scope: {
          status: '='
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

    //   vm.size = vm.size || (24 + 'px');
      if(vm.status !== undefined) {
          vm.status = vm.status.toLowerCase();
      }
      else {
          vm.status = 'offline';
      }

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
    .module('shared.statusIcon', [
      //
    ])
    .directive('statusIcon', statusIcon);
})();
