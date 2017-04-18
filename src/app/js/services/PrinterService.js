/*
*	This code was created for Printr B.V. It is open source under the formide-client package.
*	Copyright (c) 2017, All rights reserved, http://printr.nl
*/

	(function () {
		function MainService($socket, $q, $api, $rootScope, $timeout, $filter, $interval) {
		var factory = {
			resource: [],
			$active: {
				$resolved: false
			}
		};


		try {

		var resource = $api.resource('/printer');

		factory.endpoint = resource;

		factory.resource = resource.query(function () {
			factory.$setActive();
		});

		} catch (err) {
			if (window.DEBUG) console.error(err);
		}


		function updateResource(resource, type) {
			// update printer statuses on event

			var resource = resource || {};

			factory.resource.$promise.then(function(result) {
				try {
					switch (type) {
						case 'printer.status':

							if (!foundPrinter(factory.resource, resource)) {
								factory.resource = factory.endpoint.query(function(){
									factory.$setActive();
								});
							}
							else {
								angular.forEach(factory.resource, function(printer, key) {
									if(printer.port === resource.port) {
										angular.merge(printer, resource);

										var arr = printer.timeStarted.split(/-|\.|:/);// split string and create array.
										printer.timePassed = moment.duration(Date.now() - new Date(arr[0], arr[1] -1, arr[2], arr[3], arr[4], arr[5]))._milliseconds;

										if (printer.filePath.length > 0) {
											printer.printJob = printer.filePath.substring(printer.filePath.lastIndexOf('/')+1);
										}
										else {
											printer.printJob = null;
										}


										setPrinterStatusInterval(printer.port);

										factory.resource[key] = printer;
									}
								});
							}

							break;

						case 'printer.connected':
							factory.resource.unshift(resource);
							factory.$setActive();
							break;

						case 'printer.disconnected':
							for (var i = 0; i < factory.resource.length; i++) {
								if(factory.resource[i].port === resource.port) {
									factory.resource.splice(i, 1);

									if (resource.port == factory.$active.port) {
										factory.$active = {};
										factory.$active.status = 'offline';
										$rootScope.$emit('formide.printer:selectedRemoved');
									}

									$interval.cancel(printerStatusInterval[port]);
									break;
								}
							}
							break;

						default:
							if(window.DEBUG) console.error('Unknown printer status.');
					}
				}
				catch (e) {
				}
			});
		}

		var printerStatusInterval = {};

		function setPrinterStatusInterval(port) {
			// set an interval to set the printer to offline if a printer.status is not recievced with 5 seconds

			if (printerStatusInterval[port]) {
				$interval.cancel(printerStatusInterval[port]);
			}
			 printerStatusInterval[port] = $interval(function() {
				 for (var i = 0; i < factory.resource.length; i++) {
 					if(factory.resource[i].port === resource.port) {
 						factory.resource.splice(i, 1);

						if (resource.port == factory.$active.port) {
							factory.$active.status = 'offline';
							factory.$active.statusTemperatures = [];
						}
 						break;
 					}
 				}
			}, 5000);
		};

		$socket.socket.on('printer.status', function (resource) {
			updateResource(resource, 'printer.status');
			saveTemperatures(resource);
		});

		$socket.socket.on('printer.connected', function (resource) {
			updateResource(resource, 'printer.connected');
		});

		$socket.socket.on('printer.disconnected', function (resource) {
			updateResource(resource, 'printer.disconnected');
		});

		function saveTemperatures(resource){
			// store the last 60 seconds of temperature data for the active printer

			$timeout(function () {

				if (factory.$active &&
					factory.$active.port == resource.port &&
					(resource.status !== 'offline' || resource.status !== 'connecting') ) {

					var temps = {};
					var time = (new Date()).getTime();

					temps.time = time;

					if (factory.$active.bed.heated) {
						temps.bed = {};
						temps.bed.temp = resource.bed.temp;
						temps.bed.targetTemp = resource.bed.targetTemp;
					}

					temps.extruders = [];

					for (var i = 0; i < resource.extruders.length; i++) {
						temps.extruders.push({temp: resource.extruders[i].temp, targetTemp: resource.extruders[i].targetTemp});
					}

					factory.$active.statusTemperatures.push(temps);

					if (factory.$active.statusTemperatures.length > 30) factory.$active.statusTemperatures.splice(0,1);

				}
			});
		}


		factory.$setActive = function (params, cb) {
			var params = params || {};

			var promise = $q(function (resolve, reject) {

				if (typeof params.port === "undefined") {
					if (window.localStorage.getItem("formide.printer:selected.port") !== null) {
						params.port = decodeURIComponent(window.localStorage.getItem("formide.printer:selected.port"));
					} else {

						if (window.DEBUG) console.warn('Could not set an active printer!');

						reject('Could not set an active printer!');
					}
				} else {
					window.localStorage.setItem("formide.printer:selected.port", encodeURIComponent(params.port));
				}

				if (typeof params.port !== "undefined") {
					factory.$active.status = factory.$active.status || 'offline';

					factory.$active.$resolved = false;

					var deviceSelected = false;

					for (var i = 0; i < factory.resource.length; i++) {
						if (factory.resource[i].port == params.port) {

							factory.resource[i].selected = true;
							factory.$active = factory.resource[i];
							factory.$active.statusTemperatures = [];
							$rootScope.$emit("formide.printer:updated",factory.$active);

							deviceSelected = true;
						}
						else {
							factory.resource[i].selected = false;
						}
					}

					if(!deviceSelected) {
						if (window.DEBUG) console.warn('Could not set an active printer!');
						reject('Could not set an active printer!');
					}
				}
				else {
					factory.$active.status = 'offline';
				}
			});

			return promise;
		}


		return factory;
	}

	angular.module('service.printer', [])
	.factory('Printer', ['$socket', '$q', '$api', '$rootScope',
	'$timeout', '$filter', '$interval', MainService]);

})();
