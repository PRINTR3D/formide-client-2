
(function () {

	function UpdateController ($api, $rootScope, $scope, $notification) {
		var vm = this;

		function submitForm(user) {
		$api.users.update(user)
		.then(function(response) {
			$notification.addNotification({
				title: 'Settings Saved',
				message: 'Device Settings Saved',
				channel: 'system',
				type: 'success'
			});

			  $rootScope.$emit("modal.user.saved", true);
			  return true;
		  }, function(e) {
			  $notification.addNotification({
				  title: 'Error',
				  message: e.message,
				  channel: 'system',
				  type: 'error'
			  });
			  $rootScope.$emit("modal.user.saved", true);
			});
		}

		angular.extend(vm, {
			submitForm: submitForm,
			user: $scope.ngDialogData
		});
	}

	function CreateController ($api, $rootScope, $scope, $notification) {
		var vm = this;

		var user = {};

		function submitForm(user) {
		  $api.users.create(user)
		  .then(function(data, status, headers, config) {
			  $rootScope.$emit("modal.user.saved", true);
			  return true;
		  });
		}

		angular.extend(vm, {
		  submitForm: submitForm,
		  user: user
		});
	}


	function MainController ($auth, $api, $rootScope, ngDialog, $notification, $timeout, $location) {
		var vm = this;

		vm.wifi = {};
		vm.chart = {};
		vm.storage = {};
		vm.network = {};

		vm.hotspotResolved = true;

		vm.chart.options = {
			cutoutPercentage: 80,
			tooltips: {enabled: false},
			animation: {animateRotate: false},
			responsive: true,
			maintainAspectRatio: false,
		}

		var color1 = "#615892";
		var color2 = "#e4e4e4";

		vm.chart.datasetOverride = {
			backgroundColor: [
				color1, color2
			],
			hoverBackgroundColor: [
				color1, color2
			],
			borderColor: [
				'#FFF', '#FFF'
			],
			hoverBorderColor: [
				'#FFF', '#FFF'
			],
			borderWidth: [
				2, 2
			],
			hoverBorderWidth: [
				2, 2
			]
		};

		$api.get('/system/info')
		.then(function(response) {
			vm.deviceType = response.deviceType;
		});

		$api.get('/auth/validate')
		.then(function(response) {
		  	vm.currentUser = response.user.username;
		});

		// private functions
		function getUsers() {
			$api.users.query()
			.then(function(response) {
				vm.users = response;
			});
		}

		function getDiskspace() {
		  	$api.get('/storage/diskspace')
		  	.then(function(response) {
			  	vm.diskspace = response;

				vm.storage.percentageUsed = (((vm.diskspace.total - vm.diskspace.free) / vm.diskspace.total) * 100).toFixed(2);

				vm.storage.percentageLeft = ((vm.diskspace.free / vm.diskspace.total) * 100).toFixed(2);

				vm.storage.percentageUsedRnd = Math.round(vm.storage.percentageUsed);

				vm.chart.labels = ["", ""];
				vm.chart.data = [vm.storage.percentageUsed, vm.storage.percentageLeft];
		  	});
		}

		function getNetwork(reset) {

			reset = reset || false;

			vm.network = {};
			vm.networkResolved = false;

			$api.get('/network/status')
			.then(function(response) {
				if (!reset && vm.network.isConnected && !vm.network.publicIp) {
					// ip info can take longer to come through
					$timeout(function () {
						getNetwork();
					}, 2000);
				}
				else if (reset && vm.network.publicIp) {
					// if wifi has been reset, keep fatching until device says it is no longer connected
					$timeout(function () {
						getNetwork(true);
					}, 2000);
				}
				else {
					vm.network = response;
					vm.networkResolved = true;
				}
			});
		}

		function getSSIDs() {
			vm.refreshingSSIDs = true;
		  	$api.get('/network/list')
		  	.then(function(response) {
			  	vm.ssids = response;
				vm.refreshingSSIDs = false;
		  	});
		}


		// public functions

		function setHotspot() {
		  var localIp = vm.network.ip;

		  if (!localIp && vm.network.isHotspot) {
			  // if turning off the hotspot and no IP avalible
			  $notification.addNotification({
				  title: 'Hotspot Reset',
				  message: 'You cannot turn off the device hotspot if it is not connected to a network',
				  channel: 'system',
				  duration: -1,
				  type: 'error'
			  });

		  }else if (vm.network.isHotspot) {
			  // if turning off the hotspot
			  $notification.addNotification({
					title: 'Hotspot Reset',
					message: 'Disabling the device hotspot will cause it to no longer emit the Wi-Fi hotspot. Once disabled you will need to connect to it via the device IP on port 8080.',
					type: 'error',
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
								vm.hotspotResolved = false;
								$api.post('/network/hotspot', {enabled: vm.network.isHotspot})
								.then(function(response) {
									vm.network.isHotspot = false;
									vm.hotspotResolved = true;
									$notification.addNotification({
										title: 'Hotspot Disabled',
										message: 'Device will no longer emit the Wi-Fi hotspot',
										channel: 'system',
										type: 'success'
									});

									if ($location.$$host == '10.20.30.40') {
										//navigate to the deive ip
										window.location = 'http://'+localIp+':8080';
										$timeout(function () {
											window.stop();
										}, 15000)
									}
								});

								return true;
							}
						}
					],
					popup: true
				});
		  }else {
			  // if turning on the hotspot
			  vm.hotspotResolved = false;
			  $api.post('/network/hotspot', {enabled: vm.network.isHotspot})
			  .then(function(response) {
				  vm.network.isHotspot = true;
				  vm.hotspotResolved = true;
				  $notification.addNotification({
					  title: 'Hotspot Enabled',
					  message: 'Device will now emit the Wi-Fi hotspot',
					  channel: 'system',
					  type: 'success'
				  });
			  });
		  }
		}

		function resetWifi() {

			$notification.addNotification({
				title: 'Wi-Fi Reset',
				message: 'After reseting your Wi-Fi you will need to connect to your device at http://10.20.30.40 via the device hotspot',
				type: 'error',
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
							$api.post('/network/reset')
							.then(function(response) {
								$notification.addNotification({
									title: 'Settings Reset',
									message: 'Wi-Fi settings reset',
									channel: 'system',
									type: 'success'
								});

								if ($location.$$host != '10.20.30.40') {
									window.location = 'http://10.20.30.40';
										$timeout(function () {
										window.stop();
									}, 15000)
								}

								getNetwork(true);

							}, function(e) {
								$notification.addNotification({
									title: e.statusName,
									message: e.message,
									channel: 'system',
									type: 'error'
								});
							});

							return true;
						}
					}
				],
				popup: true
			});
		}

		function connectWifi() {
			vm.connecting = true;

			$api.post('/network/connect', {ssid: vm.wifi.ssid, password: vm.wifi.password})
			.then(function(response) {
				$notification.addNotification({
				  	title: 'Settings Saved',
				  	message: 'Wi-Fi Settings Saved',
				  	channel: 'system',
				  	type: 'success'
				});
				vm.connecting = false;
				vm.wifi.password = null;
				getNetwork();

			}, function(e) {
				vm.connecting = false;
				getNetwork();

				$timeout(function () {
					// make sure it wasn't just a linux error
					if (!vm.network.ip) {
						$notification.addNotification({
							title: e.statusName,
							message: e.message,
							channel: 'system',
							type: 'error'
						});
					}
				}, 5000);
			});
		}

		function updateModal(user) {
		  	ngDialog.open({
			  	template: 'settingsModal',
			  	controller: 'ModalUsersUpdateController',
			  	controllerAs: 'modal',
			  	className: 'ngdialog-connect',
			  	data: user
		  	});
		};

		function createModal() {
		  	ngDialog.open({
			  	template: 'settingsModal',
			  	controller: 'ModalUsersCreateController',
			  	className: 'ngdialog-connect',
			  	controllerAs: 'modal'
		  	});
		};

		function deleteUser(user) {

			$notification.addNotification({
				title: 'Delete ' + user.email,
				message: 'Are you sure?',
				type: 'error',
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
						title: 'Confirm',
						callback: function() {
							$api.users.delete({id: user.id})
							  .then(function(response) {
								  init();
							  }, function(e) {
								  $notification.addNotification({
									  title: e.statusName,
									  message: e.message,
									  channel: 'system',
									  type: 'error'
								  });
							  });
							return true;
						}
					}
				],
				popup: true
			});
		}

		var manageDevice_userSaved = $rootScope.$on("modal.user.saved", function (event, data) {
		  	init();
		  	event.stopPropagation();
		});

		function init() {
			getNetwork();
			getUsers();
			getDiskspace();
			getSSIDs();
		}

		init();

		var manageDevice_clearUp = $rootScope.$on('$locationChangeSuccess', function(event){
			if ($location.path() !== '/manage/device') {
				manageDevice_userSaved();
				manageDevice_clearUp();
			}
		})

		// exports
		angular.extend(vm, {
			getUsers: getUsers,
			updateModal: updateModal,
			createModal: createModal,
			deleteUser: deleteUser,
			connectWifi: connectWifi,
			resetWifi: resetWifi,
			setHotspot: setHotspot,
			getSSIDs: getSSIDs
		});
	}

	MainController.$inject = [
		'$auth', '$api', '$rootScope', 'ngDialog', '$notification', '$timeout', '$location'
	];

	UpdateController.$inject = [
		'$api', '$rootScope', '$scope', '$notification'
	];

	CreateController.$inject = [
		'$api', '$rootScope', '$notification'
	];

	angular
	.module('components.manageDevice', [
		//
	])
	.controller('ManageDeviceController', MainController)
	.controller('ModalUsersUpdateController', UpdateController)
	.controller('ModalUsersCreateController', CreateController);
})();
