/*
*	This code was created for Printr B.V. It is open source under the formide-client package.
*	Copyright (c) 2017, All rights reserved, http://printr.nl
*/

(function () {

	function MainController($rootScope, printerCtrl, Printer, $socket, $timeout, $location, $document) {

		var vm = this;

		vm.targetTempExt = [];

		vm.tuneGcode = {
			printSpeed: 'M220 S',
			flowRate: 	'M221 S',
			fanSpeed:	'M106 S',
			extTemp:	'M104 S',
			bedTemp:	'M140 S'
		}

		var updateTuneValues = true;

		// private functions

		Printer.resource.$promise.then(function (data) {
			vm.maxExtTemp = Printer.$active.maxTemperature || 450;
			vm.maxBedTemp = Printer.$active.maxBedTemperature || 100;
		});

		var printControls_printerUpdated = $rootScope.$on("formide.printer:updated", function () {
			vm.maxExtTemp = Printer.$active.maxTemperature || 450;
			vm.maxBedTemp = Printer.$active.maxBedTemperature || 100;
		});

		// set tune values from status
		$socket.socket.on('printer.status', function (resource) {
			if (updateTuneValues) {
				vm.printSpeed = Printer.$active.speedMultiplier;
				vm.flowRate = 	Printer.$active.flowRate;
				vm.fanSpeed = 	Printer.$active.fanSpeed;
			}
		});

		var timer;

		// if tune values are updated, wait 10 seconds before allowing updating from status to continue
		var printControls_printerTune = $rootScope.$on('formide.printer:tune', function () {
			updateTuneValues = false;
			$timeout.cancel(timer);
			timer = $timeout(function () {updateTuneValues = true}, 10000);
		});

		// public functions

		function navigate(route){
			$location.path(route);
		}

		function runConsoleCommands() {

		if (vm.customCommands[vm.customCommands.length - 1].toUpperCase() == 'CLEAR') {
			// clear the console
			vm.customCommands = [];
		}
		else {
			// send all commands since the last '-> SENT'
			var i = vm.customCommands.lastIndexOf('-> SENT') + 1;
			for(i; i < vm.customCommands.length; i++) {
				var command = vm.customCommands[i].toUpperCase();
				printerCtrl.gcode(command);
			}

			// add '-> SENT' feedback
			var temp = angular.copy(vm.customCommands);
				temp.push('-> SENT');
				temp.push('');
				vm.customCommands = temp;
			}

			// scroll textarea up
			var element = angular.element($document[0].querySelector('#console-textarea'));
				$timeout(function(){
				element[0].scrollTop = element[0].scrollHeight;
			});
		}

		function runExtruderCommand(index){

			if ( checkValue(vm.targetTempExt[index]) && (Printer.$active.status == 'printing' || Printer.$active.status == 'paused' || Printer.$active.status == 'heating') ) {
				if (index > 0) {
					printerCtrl.tune(vm.tuneGcode.extTemp + vm.targetTempExt[index] + ' T'+index);
				}
				else {
					printerCtrl.tune(vm.tuneGcode.extTemp + vm.targetTempExt[index]);
				}
			}
			else if (checkValue(vm.targetTempExt[index])) {
				printerCtrl.extruder(index).temperature(vm.targetTempExt[index]);
			}
		}

		function runBedCommand(){

			if (checkValue(vm.targetTempBed) && (Printer.$active.status == 'printing' || Printer.$active.status == 'paused' || Printer.$active.status == 'heating') ) {
				printerCtrl.tune(vm.tuneGcode.bedTemp + vm.targetTempBed);
			}
			else if (checkValue(vm.targetTempBed)) {
				printerCtrl.bed.temperature(vm.targetTempBed);
			}
		}

		function checkValue(value){
			if (typeof value !== 'undefined' && value != null) {
				return true;
			}else {
				return false;
			}
		}


		var printControls_clearUp = $rootScope.$on('$locationChangeSuccess', function(event){
			if ($location.path() !== '/print/controls') {
				printControls_printerUpdated();
				printControls_printerTune();
				printControls_clearUp();
			}
		})


		// exports
		angular.extend(vm, {
			printerCtrl: printerCtrl,
			printer: Printer,
			runConsoleCommands: runConsoleCommands,
			runExtruderCommand: runExtruderCommand,
			runBedCommand: runBedCommand,
			checkValue: checkValue,
			navigate: navigate
		});
	}

	MainController.$inject = [
		'$rootScope', 'printerCtrl', 'Printer', '$socket', '$timeout', '$location', '$document'
	];


	angular
	.module('components.controlPrint', [
		//
	])
	.controller('ControlPrintController', MainController)
})();
