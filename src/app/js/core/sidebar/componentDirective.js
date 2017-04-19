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

    function MainController($rootScope, $interval, Printer, $location, Sidebar) {
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

        vm.slicingInProgress = false;

        vm.unknownPrinter = false;

		vm.onboarding = $rootScope.onboarding;

        vm.activeSliceMessage = 0;

        vm.sliceMessages = [
            'Sharpening katana swords',
            'Calculating polygons',
            'Repairing Models',
            'We are testing your patience',
            'Would you like fries with that?',
            'It is still faster than you could draw it',
            'Reticulating Spines', //A Simcity 3000 Joke
            'Reconfiguring the office coffee machine',
            'Prepare for awesomeness!',
            'Adjusting Bell Curves',
            'Applying Feng Shui',
            'Building Data Trees',
            'Calculating Inverse Probability Matrices',
            'Computing Optimal Bin Packing',
            'Deciding What Message to Display Next',
            'Dicing Models',
            'Integrating Curves',
            'Synthesizing Gravity',
            'Synthesizing Wavelets'
        ];

        function setVisible (index) {
            if (index == vm.activeSliceMessage) {
               return("1") ;
            } else {
               return("0") ;
            }
        }

        $interval(function() {
            vm.activeSliceMessage = Math.floor(Math.random() * vm.sliceMessages.length);
        }, 2000);

		function printerSetupDialog(){
			if (vm.unknownPrinter) {
				$rootScope.printerSetupDialog(vm.unknownPrinter.device, vm.unknownPrinter.port, true);
				vm.unknownPrinter = false;
			}
			else {
				$rootScope.printerSetupDialog();
			}
		}


        // exports
        angular.extend(vm, {
            setVisible: setVisible,
			printerSetupDialog: printerSetupDialog,
			navigate: navigate,
			sidebar: Sidebar
        });
    }


    MainController.$inject = [
	    '$rootScope',
	    '$interval',
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
