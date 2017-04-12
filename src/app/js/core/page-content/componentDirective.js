/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function corePageContent() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'page-content/componentTemplate.html',
			scope: {
				routeConfig: '=',
			},
			transclude: true,
			controller: MainController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;
	}

	function MainController($router, $rootScope, $auth, $location, ngDialog) {
		var vm = this;

		var routes = [];

		vm.showMobileNav = false;

		function getRoutes() {
			try {
				routes = vm.routeConfig
				.filter(function (item) {
					return (item.nav !== undefined) ? true : false;
				});
			}
			catch(err) {
				if(window.DEBUG) console.info("RouteConfig not defined, could not populate navigation items.");
			}
		}
		getRoutes();


		$rootScope.$watch(
        function() { return $router.navigating; },
        function() {
            if (!$router.navigating) {
                getRoutes();

                $rootScope.$emit('formide.navigated', true);

                window.scrollTo(0, 0);

				var route = $router.lastNavigationAttempt.substring(1);

				if (route == 'login') {
					$rootScope.isLoggedIn = false;
					ngDialog.closeAll();
					$rootScope.setSidebarHide();
				}
				else {
					for (var i in routes) {
	                    if (routes[i].path) {
	                        routes[i].nav.active = (route.split('/').indexOf(routes[i].path.substring(1)) > -1);
	                        if (routes[i].nav.active && routes[i].loggedIn) {

	                            $auth.checkLoggedin()
								.then(function (access_token) {

				 				   if (access_token.length > 0) {
				 					   $rootScope.isLoggedIn = true;
				 				   }
				 				   else {
				 					   $rootScope.isLoggedIn = false;
									   navigate('/login');
				 				   }
								}, function (error) {
								   $rootScope.isLoggedIn = false;
								   navigate('/login');
								});
	                        }
	                    }
	                }
				}
            }
        });


		function navigate(route){
			$location.path(route);
		}

		function logOut(){
			window.localStorage.removeItem('formide.auth:token');
			navigate('/login');
		}


		// exports
		angular.extend(vm, {
			routes: routes || {},
			navigate: navigate,
			logOut: logOut
		});
  }


  MainController.$inject = [
	  '$router', '$rootScope', '$auth', '$location', 'ngDialog'
  ];

  angular
    .module('core.pageContent', [
      //
    ])
    .directive('corePageContent', corePageContent);
})();
