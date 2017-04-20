/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['app']);
		angularLoaded();
	});

	function MainController($scope, $rootScope, $location, $api, $http,
		$socket, $notification, $timeout, Printer, Upload, File, Sidebar) {

		var vm = this;

		var device_setup = $location.search().setup;
		if (device_setup) {
			window.localStorage.setItem('formide:setup', device_setup);
			$location.search('setup', null);
		}
		

		vm.loaded = false;

		$timeout(function () {
			vm.loaded = true;
		}, 200);

		$rootScope.bodyNoScroll = false;

		$rootScope.pageOffsetHeight = 0;

		Sidebar.setSidebar()

		$rootScope.fileUploading = false;

		$scope.$watch(function () {
			return vm.droppedFiles;
		}, function (newValue, oldValue) {

			if (newValue && newValue.length > 0 && $location.$$path == "/library" && !$rootScope.fileUploading) {

				var files = newValue;

				var access_token = window.localStorage.getItem('formide.auth:token');
				var uploadUrl = window.PATH.api + '/storage';

				$rootScope.fileUploading = true;

				var count = 0;

				for (var i = 0; i < files.length; i++) {
					var file = files[i];

					var data = {
						headers: {
							"Authorization": 'Bearer ' + access_token
						},
						url: uploadUrl,
						file: file
					}

					Upload.upload(data)
					.then(function (response) {
						File.resource.$add(response.data.file);

						$notification.addNotification({
							title: 'File Upload',
							message: response.data.file.filename + ' successfully uploaded',
							channel: 'system',
							type: 'success'
						});

						count ++;
						if (count == files.length) {
							$rootScope.fileUploading = false;
						}

					}, function (response) {

						$notification.addNotification({
							title: 'File Upload Failed',
							message: response.data.message,
							channel: 'system',
							type: 'error'
						});

						$rootScope.fileUploading = false;

					}, function (evt) {
						console.log('uploadProgress', parseInt(100 * evt.loaded / evt.total));
					});
				}

			}
		});


		$rootScope.$on("formide.device:updated", function () {
			$socket.reconnect();
		});


		var state, visibilityChange;
		// Set vendor-prefixed
		if (typeof document.hidden !== "undefined") {
			visibilityChange = "visibilitychange";
			state = "visibilityState";
		} else if (typeof document.mozHidden !== "undefined") {
			visibilityChange = "mozvisibilitychange";
			state = "mozVisibilityState";
		} else if (typeof document.msHidden !== "undefined") {
			visibilityChange = "msvisibilitychange";
			state = "msVisibilityState";
		} else if (typeof document.webkitHidden !== "undefined") {
			visibilityChange = "webkitvisibilitychange";
			state = "webkitVisibilityState";
		}

		// Add a listener that checks the page visibility
		document.addEventListener(visibilityChange, function() {
			if (document[state] == 'visible') {
				$socket.reconnect();
			}
		}, false);


		/*
		 * Receive printer error
		 */
		$socket.socket.on('printer.failed', function (data) {
			$notification.addNotification({
			    title: data.title,
			    message: data.message,
				channel: 'printer',
			    type: 'error',
				save: true
			});
		});

		/*
		 * Receive printer connect message
		 */
		$socket.socket.on('printer.connected', function (data) {
			$notification.addNotification({
			    title: 'Printer Connected',
			    message: 'Printer connected to port ' + data.port,
				channel: 'printer',
			    type: 'info'
			});
		});

		/*
		 * Receive printer disconnect message
		 */
		$socket.socket.on('printer.disconnected', function (data) {
			$notification.addNotification({
			    title: 'Printer Disconnected',
			    message: 'Printer disconnected from port ' + data.port,
				channel: 'printer',
			    type: 'info'
			});
		});

		/*
		 * Receive printer finished message
		 */
		$socket.socket.on('printer.finished', function (data) {
			$notification.addNotification({
			    title: 'Print Finished',
			    message: 'The current print has finished',
				channel: 'printer',
			    type: 'success',
				save: true
			});
		});

		/*
		 * Receive printer warning message
		 */
		$socket.socket.on('printer.warning', function (data) {
			$notification.addNotification({
			    title: data.title,
			    message: data.message,
				channel: 'printer',
			    type: 'info'
			});
		});

		/*
		 * Receive printer error message
		 */
		$socket.socket.on('printer.error', function (data) {
			$notification.addNotification({
			    title: data.title,
			    message: data.message,
				channel: 'printer',
			    type: 'error',
				duration: -1,
				popup: true,
				actions: [
					{
						title: 'Cancel',
						callback: function() {
							return true;
						}
					}
				]
			});
		});

		// exports
		angular.extend(vm, {
			routeConfig: MainController.$routeConfig,
			notifications: $notification.active,
			sidebar: Sidebar
		});
	}

	function componentLoaderConfig($componentLoaderProvider) {
		$componentLoaderProvider.setTemplateMapping(function (name) {
			var dashName = dashCase(name);
			return dashName + '/componentView.html';
		});
	}

	componentLoaderConfig.$inject = [
		'$componentLoaderProvider'
	];

	MainController.$inject = [
		'$scope', '$rootScope', '$location', '$api', '$http', '$socket',
		'$notification', '$timeout', 'Printer', 'Upload', 'File', 'Sidebar'
	];

	MainController.$routeConfig = [
		{
			path: '/',
			redirectTo: '/formide'
		},
		{
			path: '/login',
			component: {
				mainView: "authLogin"
			},
			as: 'authLogin'
		},
		{
			path: '/formide',
			nav: {
				name: 'Formide',
				title: 'Formide'
			},
			loggedIn: true,
			component: {
				mainView: "connect"
			},
			as: 'connect'
		},
		{
			path: '/manage',
			nav: {
				name: 'Manage',
				title: 'Manage'
			},
			loggedIn: true,
			component: {
				mainView: "manage"
			},
			as: 'manage'
		},
		{
			path: '/library',
			nav: {
				name: 'Library',
				title: 'Library'
			},
			loggedIn: true,
			component: {
				mainView: "fileLibrary"
			},
			as: 'fileLibrary'
		},
		{
			path: '/monitor',
			nav: {
				name: 'Monitor',
				title: 'Monitor'
			},
			loggedIn: true,
			component: {
				mainView: "monitorPrint"
			},
			as: 'monitorPrint'
		},
		{
			path: '/control',
			nav: {
				name: 'Control',
				title: 'Control'
			},
			loggedIn: true,
			component: {
				mainView: "controlPrint"
			},
			as: 'controlPrint'
		},
	];

	angular
	.module('app', [
		'module.angular',
		'module.vendor',
		'module.filters',
		'module.templateCache',
		'module.services',
		'module.shared',
		'module.core',
		'module.components'
	])
	.config(componentLoaderConfig)
	.controller('AppController', MainController);
})();
