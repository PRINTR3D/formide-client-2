/*
*	This code was created for Printr B.V. It is open source under the formide-client package.
*	Copyright (c) 2017, All rights reserved, http://printr.nl
*/

(function () {
'use strict';

	function MainController($rootScope, $api, Upload, File, printerCtrl, Printer, $location) {

		var vm = this;

		var access_token = window.localStorage.getItem('formide.auth:token');
		var uploadUrl = window.PATH.api + '/storage';

		File.resource.$promise.then(function (devices) {
			File.resource.$load()
			.then(function (response) {
				vm.files = File.resource;
			});
		});

		function navigate(route){
			$location.path(route);
		}


		function print(file) {
			printerCtrl.print(file);
			navigate('/monitor')
		}

		function upload(files){

			if(files && files.length > 0 && !$rootScope.fileUploading) {

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
					});
				}

			}
		}


		function removeMultiple(files) {
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				File.resource.$remove(file);
			}
		}




		// exports
		angular.extend(vm, {
			upload: upload,
			removeMultiple: removeMultiple,
			print: print,
			printer: Printer
		});
	}

	MainController.$inject = [
		'$rootScope', '$api', 'Upload', 'File', 'printerCtrl', 'Printer', '$location'
	];

	angular
	.module('components.fileLibrary', [
		//
	])
	.controller('FileLibraryController', MainController)
})();
