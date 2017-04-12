/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a selection list.
 */

(function () {
  function selectionList() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'selection-list/componentTemplate.html',
        scope: {
            extruders: '=',
            ngModel : '=',
            name: '@'
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
        //extruders: extruders
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.selectionList', [
      //
    ])
    .directive('selectionList', selectionList);
})();
