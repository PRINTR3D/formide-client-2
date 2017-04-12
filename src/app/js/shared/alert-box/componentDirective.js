/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for dislaying avatars in different sizes.
 */

(function () {
  function alertBox() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'alert-box/componentTemplate.html',
        scope: {
            alertId: '=',
            type: '@',
            title: '=',
            message: '=',
            actions: '=',
			link: '=?'
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($notification) {
      var vm = this;

      // private functions

      // public functions

      function closeNotification() {
          $notification.removeNotification(vm.alertId);
      }

      function executeCallback(callback) {
          var cb = callback();

          if(cb) {
              $notification.removeNotification(vm.alertId);
          }
      }

      // exports
      angular.extend(vm, {
        closeNotification: closeNotification,
        executeCallback: executeCallback
      });
  }


  MainController.$inject = [
    '$notification'
  ];

  angular
    .module('shared.alertBox', [
      //
    ])
    .directive('alertBox', alertBox);
})();
