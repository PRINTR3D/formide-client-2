/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function coreHeader() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'header/componentTemplate.html',
        scope: {
            maxWidth: '@'
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($router, $rootScope, $location, ngDialog, $auth) {
      var vm = this;

      vm.mobilenavInvisible = true;

      vm.maxWidth = vm.maxWidth || 896;

      // private functions

      // public functions
	  function navigate(route){
		  $location.path(route);
	  }

      function toggleMobilenav() {
		  $rootScope.bodyNoScroll = !$rootScope.bodyNoScroll;
		  vm.mobilenavInvisible = vm.mobilenavInvisible ? false : true;
      }

	  function logOut(){
		  window.localStorage.removeItem('formide.auth:token');
		  navigate('/login');
	  }

      // exports
      angular.extend(vm, {
      	toggleMobilenav: toggleMobilenav,
		navigate: navigate,
		logOut: logOut
      });
  }


  MainController.$inject = [
    '$router', '$rootScope', '$location', 'ngDialog', '$auth'
  ];

  angular
    .module('core.header', [
      //
    ])
    .directive('coreHeader', coreHeader);
})();
