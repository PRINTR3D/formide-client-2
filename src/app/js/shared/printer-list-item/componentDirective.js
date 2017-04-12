/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a printer list item.
 */

(function () {
  function printerListItem() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-list-item/componentTemplate.html',
        scope: {
            printer: '=',
			type: '@'
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($timeout, $location, $rootScope, Printer, printerCtrl, $notification) {
      var vm = this;

      vm.printer.status = vm.printer.status || 'offline';

	  vm.showWebcam = false;

      // public functions

	  function navigate(route){
		  $location.path(route);
	  }

	  function selectPrinter(){
		  if (vm.type != 'selected') {
			  Printer.$setActive({port: vm.printer.port})
		  }
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
			  message: 'Do you really want to stop this print?',
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
					  title: 'Stop Print',
					  callback: function() {
						  printerCtrl.stop();
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
		navigate: navigate,
		selectPrinter: selectPrinter
      });
  }


  MainController.$inject = [
    '$timeout', '$location', '$rootScope', 'Printer', 'printerCtrl', '$notification'
  ];

  angular
    .module('shared.printerListItem', [
      //
    ])
    .directive('printerListItem', printerListItem);
})();
