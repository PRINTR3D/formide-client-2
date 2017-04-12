/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 *  Component for creating a notification list item.
 */

(function () {
  function notificationListItem() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'notification-list-item/componentTemplate.html',
        scope: {
            notificationId: '=',
            title: '=',
            description: '=',
            count: '=',
            updatedAt: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($location, $notification) {
      var vm = this;

      // private functions

      // public functions

      function clearSingle(index) {
          $notification.clearSingle(index);
      }

      // exports
      angular.extend(vm, {
          clearSingle: clearSingle
      });
  }

  MainController.$inject = [
    '$location', '$notification'
  ];

  angular
    .module('shared.notificationListItem', [
      //
    ])
    .directive('notificationListItem', notificationListItem);
})();
