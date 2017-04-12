/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a printer list.
 */

(function () {
  function printerList() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-list/componentTemplate.html',
        scope: {
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
    .module('shared.printerList', [
      //
    ])
    .directive('printerList', printerList);
})();
