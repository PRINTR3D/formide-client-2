/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {

    function parse_link_header(header) {
        if (header.length === 0) {
            throw new Error("input must not be of zero length");
        }

        // Split parts by comma
        var parts = header.split(',');
        var links = {};
        // Parse each part into a named link
        for(var i=0; i<parts.length; i++) {
            var section = parts[i].split(';');
            if (section.length !== 2) {
                throw new Error("section could not be split on ';'");
            }
            var url = section[0].replace(/<(.*)>/, '$1').trim();
            var name = section[1].replace(/rel="(.*)"/, '$1').trim();
            links[name] = url;
        }
        return links;
    }

    function MainService($http, $location, $resource, $q, $timeout, $notification) {
        function getAccessToken() {
            var deferred = $q.defer();

            if(window.localStorage.getItem('formide.auth:token')) {
                deferred.resolve(window.localStorage.getItem('formide.auth:token'));
            }
            else {
                if (window.DEBUG) console.log("No token found, resolving empty string.");
				deferred.resolve('');
            }

            return deferred.promise;
        }

        function ApiRequest(method, path, parameters, url) {

            var method = (typeof method === "undefined") ? 'GET' : method;
            var path = (typeof path === "undefined") ? '' : path;
            var parameters = (typeof parameters === "undefined") ? {} :
                parameters;
            var url = (typeof url === "undefined") ? window.PATH.api : url;

            if (window.DEBUG) {
                console.time("Response Time");
            }

            var promise = getAccessToken()
            .then(function (access_token) {
                path = interpolateUrl(path, parameters);

                if (access_token.length > 1) {
                    var request = {
                        method: method.toUpperCase(),
                        url: url + path,
                        headers: {
                            'Authorization': 'Bearer ' +
                                access_token,
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        data: parameters
                    }
                }
                else {
                    var request = {
                        method: method.toUpperCase(),
                        url: url + path,
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        data: parameters
                    }
                }

                if(method.toUpperCase() === 'GET') {
                    request.params = parameters;
                }

                var deferred = $q.defer();

                $http(request)
                    .then(function (response) {
                        if (window.DEBUG) {
                            if (path === '/proxy') {
                                console.groupCollapsed("API Proxy Request (" + parameters.url + ")");
                                console.log("This API Request Uses the Formide Proxy.");
                                console.log("Full Request Path: ", url + parameters.url);
                                console.log("Parameters: ", parameters.data);
                                console.log("Response: %s (%i)", response.statusText, response.status);
                                console.log("Method", response.config.method);
                                console.log("Headers", response.headers());
                                console.log("Data Object %O", response.data);
                                console.timeEnd("Response Time");
                                console.groupEnd();
                            }
                            else {
                                console.groupCollapsed("API Request (" + path + ")");
                                console.log("Full Request Path: ", url + path);
                                console.log("Parameters: ", parameters);
                                console.log("Response: %s (%i)", response.statusText, response.status);
                                console.log("Method", response.config.method);
                                console.log("Headers", response.headers());
                                console.log("Data Object %O", response.data);
                                console.timeEnd("Response Time");
                                console.groupEnd();
                            }
                        }

                        var linkHeader;

                        try {
                            if(response.headers() && response.headers('Link')) {
                                console.log(response.headers('Link'));
                                linkHeader = parse_link_header(response.headers('Link'));
                            }
                        } catch (e) {
                            console.info('No Link-header Found.', e);
                        }
                        return deferred.resolve(response.data);
                    },
                    function (error) {
                        if (window.DEBUG) {
                            console.groupCollapsed("Error: API Request (%s)", path);
                            console.log("Full Request Path: ", url + path);
                            console.log("Parameters: ", parameters);
                            console.error("Error: %s (%i)", error.statusText, error.status);
                            console.error(error.data);
                            console.timeEnd("Response Time");
                            console.groupEnd();
                        }

                        return deferred.reject(error.data);
                    });
                return deferred.promise;
            },
            function (error) {
                if (window.DEBUG) {
                    console.timeEnd("Response Time");
                    console.error("Error: %s", error);
                }

                return error;
            });
            return promise;
        }

        function interpolateUrl(url, params) {
            url = url || '';
            params = (params || {});

            url = url.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");

            url = url.replace(
                /:([a-z_]\w*)/gi,
                function ($0, label) {
                    // NOTE: Giving "data" precedence over "params".
                    return (popFirstKey(params, label) || "");

                }
            );

            url = url.replace(/(^|[^:])[\/]{2,}/g, "$1/");
            url = url.replace(/\/+$/i, "");

            return (url);
        }

        function popFirstKey(object1, object2, objectN, key) {
            var objects = Array.prototype.slice.call(arguments);

            var key = objects.pop();

            var object = null;

            while (object = objects.shift()) {

                if (object.hasOwnProperty(key)) {
                    return (object[key]);
                }
            }
        }

        function ApiProxyRequest(method, path, parameters) {
            parameters = (typeof parameters === "undefined") ? {} :
                parameters;

            return ApiRequest('POST', '/proxy', {
                method: method,
                url: path,
                data: parameters,
                token: window.localStorage.getItem('formide.auth:token')
            });
        }

        function ApiResources(path) {
            var parameters = parameters || {};

            var resources = {};

            resources.query = function (parameters) {
                return ApiRequest('GET', path, parameters);
            };
            resources.get = function (parameters) {
                return ApiRequest('GET', path, parameters);
            };
            resources.post = function (parameters) {
                return ApiRequest('POST', path, parameters);
            };
            resources.create = function (parameters) {
                return ApiRequest('POST', path, parameters);
            };
            resources.update = function (parameters) {
                return ApiRequest('PUT', path, parameters);
            };
            resources.put = function (parameters) {
                return ApiRequest('PUT', path, parameters);
            };
            resources.delete = function (parameters) {
                return ApiRequest('DELETE', path, parameters);
            };

            return resources;
        }

        var factory = {};

        factory.getAccessToken = getAccessToken;

        factory.req = function (method, path, parameters, url) {
                return ApiRequest(method, path, parameters, url);
            },

            factory.get = function (path, parameters, url) {
                return ApiRequest('GET', path, parameters, url);
            },

            factory.post = function (path, parameters, url) {
                return ApiRequest('POST', path, parameters, url);
            },

            factory.put = function (path, parameters, url) {
                return ApiRequest('PUT', path, parameters, url);
            },

            factory.delete = function (path, parameters, url) {
                return ApiRequest('DELETE', path, parameters, url);
            }

        var proxy = {};

        proxy.req = function (method, path, parameters, url) {
                return ApiProxyRequest(method, path, parameters);
            },

            proxy.get = function (path, parameters, url) {
                return ApiProxyRequest('GET', path, parameters);
            },

            proxy.post = function (path, parameters, url) {
                return ApiProxyRequest('POST', path, parameters);
            },

            proxy.put = function (path, parameters, url) {
                return ApiProxyRequest('PUT', path, parameters, url);
            },

            proxy.delete = function (path, parameters, url) {
                return ApiProxyRequest('DELETE', path, parameters, url);
            }

        factory.proxy = proxy;

        factory.sliceprofiles = ApiResources('/db/sliceprofiles/(:id)');

        factory.printers = ApiResources('/db/printers/(:id)');

        factory.materials = ApiResources('/db/materials/(:id)');

        factory.printjobs = ApiResources('/db/printjobs/(:id)');

        factory.files = ApiResources('/db/files/(:id)');

        factory.users = ApiResources('/auth/users/(:id)');

        factory.queue = ApiResources('/db/queue/(:id)');

        factory.resource = function (path, paramDefaults, actions, url) {

            var token = window.localStorage.getItem('formide.auth:token');

			var MY_ACTIONS = {
                'get': {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'save': {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'remove': {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'delete': {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'update': {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                }
            }

            window.PATH.api = window.PATH.api || {};

            var path = (typeof path === "undefined") ? '' : path;
            var actions = angular.extend({}, MY_ACTIONS, actions);
            var paramDefaults = (typeof paramDefaults === "undefined") ? null : paramDefaults;
            var url = (typeof url === "undefined") ? window.PATH.api + path : url + path;

			if (window.DEBUG) {
				console.groupCollapsed("Resource Request (" + path + ")");
				console.log("Full Request Path: ", url);
				console.log("Param Defaults: ", paramDefaults);
				console.groupEnd();
			}

            return $resource(url, paramDefaults, actions);


        }

        return factory;
    }

    angular.module('service.api', [])
        .factory('$api', ['$http', '$location', '$resource', '$q', '$timeout', '$notification',
            MainService])
        .config(function ($httpProvider) {
            $httpProvider.defaults.headers.post['Content-Type'] =
                'application/x-www-form-urlencoded; charset=UTF-8'
        })
})();
