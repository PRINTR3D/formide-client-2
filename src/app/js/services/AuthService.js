/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {

    function MainService($api, $q, $location, $rootScope) {
        var factory = {};

        window.AUTH                 = window.AUTH || {};

        var auth_url = window.PATH.api;

        factory.login = function (username, password) {
            var deferred = $q.defer();

            $api.post('/auth/login', {
                username: username,
                password: password
            }, auth_url)
            .then(function(response) {
                window.AUTH.sessionid = response;
    			if(window.DEBUG)
    			{
                    console.groupCollapsed("Secure Route: API Authentication");
                        console.log("Session ID: ", window.AUTH.sessionid);
                    console.groupEnd();
    			}

                $rootScope.$emit("auth:loggedin", true);

                deferred.resolve(response);
            },
            function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        factory.logout = function () {
            var promise = $api
            window.localStorage.removeItem("formide.auth:token");
            $location.path('/login');

            return promise;
        };

        factory.checkLoggedin = function() {
            var deferred = $q.defer();

            $api.getAccessToken()
            .then(function(access_token) {
                if(access_token.length < 1) {
                    deferred.reject("Not loggedin");
					factory.logout();
                }
                else {
					$api.get('/auth/validate')
					.then(function(response) {
						deferred.resolve(access_token);
					}, function(err) {
						deferred.reject("access_token invalid");
						factory.logout();
					});
                }
            });

            return deferred.promise;
        };

        function changeAuth(loggedIn) {
            factory.user.isAuthenticated = loggedIn;
        }

        return factory;

    }

    angular.module('service.auth', [])
        .factory('$auth', ['$api', '$q', '$location', '$rootScope', MainService]);

})();
