/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a queue list item.
 */

(function () {
    function printJobItem() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'print-job-item/componentTemplate.html',
            scope: {
            },
            transclude: true,
            controller: MainController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    function MainController(printerCtrl, $rootScope, $timeout, Printer, File, $notification, ngDialog, $api, $location, $filter) {
        var vm = this;

		vm.wait = true;
        vm.clicked = false;
        vm.printer = Printer.$active;
		vm.imagesRootLocation = window.PATH.images;


		$timeout(function () {
			vm.wait = false;
		}, 3000);

		function navigate(route){
	  		$location.path(route);
	  	}

        function pausePrint() {
            printerCtrl.pause();
            vm.executingCommand = true;
        }

        function resumePrint() {
            printerCtrl.resume();
            vm.executingCommand = true;
        }

        function stopPrint() {
            $notification.addNotification({
                title: 'Stop Print',
                message: 'Do you want to stop this print?',
                type: 'info',
                duration: -1,
                actions: [
                    {
                        title: 'Cancel',
                        callback: function() {
                            console.log('abort!');
                            return true;
                        }
                    },
                    {
                        title: 'Continue',
                        callback: function() {
                            printerCtrl.stop();
							if (Printer.$active.deviceVersion && $filter('majorVersion')(Printer.$active.deviceVersion) < 2) {
								// pre client v2 queuing code
                            	vm.queueItem.status = 'queued';
							}
                            vm.executingCommand = true;

                            return true;
                        }
                    }
                ],
                popup: true
            });
        }

        // exports
        angular.extend(vm, {
            pausePrint: pausePrint,
            resumePrint: resumePrint,
            stopPrint: stopPrint,
			navigate: navigate
        });
    }

    MainController.$inject = [
    'printerCtrl', '$rootScope', '$timeout', 'Printer', 'File', '$notification', 'ngDialog', '$api', '$location', '$filter'
  ];

    angular
        .module('shared.printJobItem', [
      //
    ])
        .directive('printJobItem', printJobItem);
})();
