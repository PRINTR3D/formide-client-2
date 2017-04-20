/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function coreAside() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'sidebar/componentTemplate.html',
            scope: {
                printers: '='
            },
            transclude: true,
            controller: MainController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

    }

    function MainController($rootScope, Printer, $location, Sidebar) {
        var vm = this;

		vm.showCloudMsg = true;

        vm.printer = [];

		vm.resolved = false;

		Printer.resource.$promise.then(function (data) {
			vm.printer = Printer.resource;
			setActivePrinter(vm.printer);
			vm.resolved = true;
		});

		function navigate(route){
			$location.path(route);
		}

		function setActivePrinter(printers){
			vm.printerActive = null;
			for (var i = 0; i < printers.length; i++) {
				if (printers[i].selected) {
					vm.printerActive = printers[i];
					break;
				}
			}
		}

		$rootScope.$on('formide.printer:updated', function (event, state) {
			vm.printer = Printer.resource;
			setActivePrinter(vm.printer);
		});

		$rootScope.$on('formide.printer:selectedRemoved', function (event, state) {
			vm.printerActive = null;
		});




        // exports
        angular.extend(vm, {
			navigate: navigate,
			sidebar: Sidebar
        });
    }


    MainController.$inject = [
	    '$rootScope',
	    'Printer',
		'$location',
		'Sidebar'
	  ];

    angular
        .module('core.aside', [
      		//
    	])
        .directive('coreAside', coreAside);
})();
