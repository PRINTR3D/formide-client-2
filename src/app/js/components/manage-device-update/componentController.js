
(function () {

	function MainController ($api, $routeParams, $socket, $interval) {
		var vm = this;

		vm.device = null;
		vm.deviceUpdateStatus = {};
		vm.deviceUpdateNeeded = {};

		vm.updateResponse = '';

		// store the interval promise in this variable
	   var promise;

	   // starts the interval
	   var start = function() {
		 // stops any running interval to avoid two intervals running at the same time
		 stop();

		 promise = $interval(function() {
			if(vm.valuenow < 99) {
				 vm.valuenow++;
			}
		 }, 6000); //10 minutes in total
	   };

	   // stops the interval
	   var stop = function() {
		 $interval.cancel(promise);
	   };

	   // starting the interval by default

		vm.valuenow = 0;

		// public functions

		// check latest update status
		function getUpdateStatus() {
			$api.get('/update/status')
			.then(function(data, status, headers, config) {
				vm.deviceUpdateStatus = data;
			});
		}

		// check if update is needed
		function getUpdateNeeded() {
			$api.get('/update/check')
			.then(function(data, status, headers, config) {
				vm.deviceUpdateNeeded = data;
			}, function(err){
				vm.deviceUpdateNeeded = err;
			});
		}

		vm.updating = false;

		// do an actual update
		function doUpdate() {
			vm.updating = true;
			start();

			$api.post('/update/do')
			.then(function(data, status, headers, config) {
				vm.updateResponse = data;
			});
		}

		$socket.socket.on('device.connected', function (data) {

		});

		function init() {
			getUpdateStatus();
			getUpdateNeeded();
		}

		vm.updated = false;

	    $socket.socket.on('device.connected', function(data) {
			if(data.device == $routeParams.deviceId) {
				stop();
				// vm.updating = false;

				vm.valuenow = 100;

				vm.updating = true;
				vm.updated = true;

				init();
			}
	    });

		// Get device when component loads
		init();

		// exports
		angular.extend(vm, {
			doUpdate: doUpdate,
			getUpdateNeeded: getUpdateNeeded
		});
	}

	MainController.$inject = [
		'$api',
		'$routeParams',
		'$socket',
		'$interval'
	];

	angular
	  .module('components.manageDeviceUpdate', [
	  	//
	  ])
	  .controller('ManageDeviceUpdateController', MainController)
})();
