/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a block that can be selected.
 */

(function () {
  function selectionBlock() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'selection-block/componentTemplate.html',
        scope: {
            currentItem: '@',
            ngModel: '='
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
      vm.item = JSON.parse(vm.currentItem);

    //   vm.ngModel =

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.selectionBlock', [
      //
    ])
    .directive('selectionBlock', selectionBlock);
})();
