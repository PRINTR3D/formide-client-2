/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function MainRun($socket) {
		$socket.socket.on('log.debug', function (data) {
			if (window.DEBUG) {
				console.groupCollapsed("Log [%s] (%s)", data.device, data.message);
				console.log('Message: ', data.message);
				console.log('Module Path: ', data.modulePath);
				console.log('Timestamp: ', data.timestampDate + data.timestampString)
				console.groupEnd();
			}
		});
	}

	function MainService(socketFactory, $auth) {
		var factory = {};

		var access_token = window.localStorage.getItem('formide.auth:token');
		window.PATH.socket = window.PATH.socket || window.location.protocol + '//' + window.location.hostname + ':4000';

		factory.authenticate = function () {

			$auth.checkLoggedin()
			.then(function(access_token) {
				if(access_token.length < 1) {
					if (window.DEBUG) console.info("Not loggedin, could not connect to sockets.");
					return false;
				}
				else {
					var type = type || 'user';
					try {
						factory.socket.emit('authenticate', {
							type: type,
							accessToken: access_token
						}, function (response) {

							if (response.success === false) {
								if (window.DEBUG) console.warn('Could not authenticate socket.', response);
							} else {
								if (window.DEBUG) console.info('Authenticated socket', response);
							}
						});
					} catch (e) {
						if (window.DEBUG) console.warn('Could not authenticate socket.', e);
					}
				}
			},
			function (e) {
				if (window.DEBUG) console.error("Not loggedin, could not connect to sockets.", e);
				return false;
			});
		}


		factory.reconnect = function () {
			console.log('reconect to socket');
			factory.socket.disconnect();
		}

		factory.socket = socketFactory({
			ioSocket: io.connect(window.PATH.socket, {forceNew: true})
		});

		factory.socket.on('disconnect', function (){
			console.log('factory.socket.on disconnected')
			factory.socket.connect();
		});

		factory.socket.on('connect', function(){
			console.log('factory.socket.on connected')
			factory.authenticate();
		});

		return factory;
	}

	angular.module('service.socket', [])
		.run(['$socket', MainRun])
		.factory('$socket', ['socketFactory', '$auth', MainService]);
})();
