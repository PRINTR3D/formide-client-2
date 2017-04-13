/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

function foundPrinter(resource, data) {
	for (var i in resource) {
		var printer = resource[i];

		if (printer.port === data.port) return true;
	}

	return false;
}

(function () {

	var logoutTitle;
	var env = null;

	if (!localStorage.getItem('formide:env')) {
		getEnv(function(env) {
			setEnv(env);
		});
	}
	else {
		// try to load env from local storage, otherwise call again
		try {
			env = localStorage.getItem('formide:env');
			setEnv(env);
			getEnv();
		}
		catch (e) {
			getEnv(function(env) {
				setEnv(env);
			});
		}
	}

	function getEnv(callback) {
		httpGetAsync(window.PATH.root + '/api/env', function(envResponse) {
			localStorage.setItem('formide:env', envResponse);

			if (callback && typeof(callback) == "function"){
				return callback(envResponse);
			}
		});
	}


	function setEnv(response) {
		try {
			var response = JSON.parse(response);
		} catch (e) {
			var response = {};
			console.error(e);
		}

		window.ENV.name = response.name || 'local-interface';
		window.ENV.version = response.version || '0.0.0';
		window.ENV.type = response.environment || 'development';
		window.ENV.theme = response.theme || 'formide';

		window.PATH.root   = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

		window.PATH.api    = window.location.protocol + '//' + window.location.hostname + ':1337/api';
		window.PATH.socket = window.location.protocol + '//' + window.location.hostname + ':1337';
		window.PATH.images = window.location.protocol + '//' + window.location.hostname + ':1337/api/db/files';

		logoutTitle = 'Logout';

		angular.element(document).ready(function () {
			angular.bootstrap(document, ['app']);
			angularLoaded();
		});

		if(!localStorage.getItem('formide.viewer:settings')){

			var colors = [
				{
					r: 70,
					g: 97,
					b: 230
				},
				{
					r: 203,
					g: 70,
					b: 230
				},
				{
					r: 230,
					g: 70,
					b: 97
				},
				{
					r: 230,
					g: 203,
					b: 70
				},
				{
					r: 97,
					g: 230,
					b: 70
				},
				{
					r: 70,
					g: 230,
					b: 203
				},
				{
					r: 114,
					g: 115,
					b: 128
				},
				{
					r: 56,
					g: 58,
					b: 81
				}
			];

			var settings = {};

			settings.defaultModelColor = colors[
				Math.floor(Math.random() *
					colors.length)];

			localStorage.setItem('formide.viewer:settings', JSON.stringify(settings));
		}

	}

	function MainController($scope, $rootScope, $router, $location, $api, $http,
		$socket, $notification, ngDialog, $timeout, Printer,
		Upload, File, $routeParams, $interval, $window) {
		var vm = this;

		var device_setup = $location.search().setup;
		if (device_setup) {
			window.localStorage.setItem('formide:setup', device_setup);
			$location.search('setup', null);
		}

		vm.setupLocation = window.PATH.setup;

		vm.unknownPrinter = false;
		vm.loaded = false;

		vm.theme = window.ENV.theme;

		$timeout(function () {
			vm.loaded = true;
		}, 200);

		$rootScope.bodyNoScroll = false;

		$rootScope.floatingWebcam = false;

		$rootScope.pageOffsetHeight = 0;

		$rootScope.sidebar = {
			width: 340,
			controller: 'SidebarController',
			template: 'sidebar/componentTemplate.html'
		};

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

		vm.sidebarInvisible = (window.localStorage.getItem("formide.sidebar:invisible") === 'true');

		$rootScope.sidebarInvisible = vm.sidebarInvisible;

		vm.setSidebarInvisible = function () {
			window.scrollTo(0, 0);
			vm.sidebarInvisible = vm.sidebarInvisible ? false : true;
			window.localStorage.setItem("formide.sidebar:invisible", vm.sidebarInvisible);
			$rootScope.$emit('trigger.resize', true);
			$rootScope.sidebarInvisible = vm.sidebarInvisible;
		};

		$rootScope.setSidebarInvisible = vm.setSidebarInvisible;

		vm.setSidebarHide = function () {
			$rootScope.sidebar = false;
		};

		$rootScope.setSidebarHide = vm.setSidebarHide;

		vm.setSidebarShow = function () {
			$rootScope.sidebar = true;
		};

		$rootScope.setSidebarShow = vm.setSidebarShow;

		vm.printers = [];
		vm.activeRoute = 'landing';

		var urlParams = $location.search();

		// exports
		angular.extend(vm, {
			routeConfig: MainController.$routeConfig,
			notifications: $notification.active
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
			console.log('finished');
			$notification.addNotification({
			    title: data.title,
			    message: data.message,
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
		'$scope', '$rootScope', '$router', '$location', '$api', '$http',
		'$socket', '$notification', 'ngDialog', '$timeout', 'Printer',
		'Upload', 'File', '$routeParams', '$interval', '$window'
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
