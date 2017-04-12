/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService($api, $q, $filter) {

		var factory = {
			resource: [],
			$resolved: false
		};

		try {

			var resource = $api.resource('/storage/:filename', {
				filename: '@filename'
			});

			factory.endpoint = resource;

			factory.resource = resource.query();

		} catch (err) {
			if (window.DEBUG) console.error(err);
		}


        var file_single = function (file, cb) {

            var promise = $q(function (resolve, reject) {
                try {
                    factory.endpoint.get({
                        filename: file.filename
                    }, function (response) {
	                	resolve(response);

						if(typeof cb == "function") {
						    cb(response);
						}
                    });
                } catch (e) {
                    if (window.DEBUG) console.error(e);
                    reject(e);
                }
            });

            return promise;
        }

		var file_download = function (file) {

			var resource = $api.resource('storage/:filename/download')

            var promise = $q(function (resolve, reject) {
                try {
                    resource.get({
                        filename: file.filename
                    }, function (response) {
	                	resolve(response);
                    });
                } catch (e) {
                    if (window.DEBUG) console.error(e);
                    reject(e);
                }
            });

            return promise;
        }

		var file_remove = function (file, cb) {

            try {
                factory.endpoint.delete({
                    filename: file.filename
                }, function (response) {

					for (var i = 0; i < factory.resource.length; i++) {
						if(factory.resource[i].filename === file.filename) {
							factory.resource.splice(i, 1);
							break;
						}
					}

					if(typeof cb == "function") {
					    cb();
					}
				});


            } catch (e) {
                console.error(e);
            }

        }


		var file_add = function (file, cb) {

            factory.resource.unshift(file);

			if(typeof cb == "function") {
				cb();
			}
        }


        var init = function () {
            factory.resource.$remove 	= file_remove;
            factory.resource.$single 	= file_single;
			factory.resource.$add 		= file_add;
			factory.resource.$download 	= file_download;
        }

        factory.init = init;

        try {
            init();
        } catch (err) {
            if (window.DEBUG) console.error(err);
        }

        return factory;
    }

    angular.module('service.file', [])
        .factory('File', ['$api', '$q', '$filter',
            MainService]);

})();
