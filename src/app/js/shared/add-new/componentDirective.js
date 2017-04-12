/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component button
 */

(function () {
  function addNew() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'add-new/componentTemplate.html',
        scope: {
            //
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
    .module('shared.addNew', [
      //
    ])
    .directive('addNew', addNew);
})();
