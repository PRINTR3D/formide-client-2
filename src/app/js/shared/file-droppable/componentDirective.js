/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function fileDroppable($timeout, $location, $rootScope) {
    var directive = {
		link: function(scope, element) {
			// again we need the native object
			var el = element[0];

			var leaveTimeout;
			var dragOverClass;

			el.addEventListener(
				'dragover',
				function(e) {

					if ($location.$$path == "/library") {

						// check that item being dragging is from outside of the library and not external
						var dt = e.dataTransfer;
  						if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : e.dataTransfer.types[0] != 'draggable' && e.dataTransfer.types[1] != 'draggable') && !$rootScope.fileUploading) {

							// allows us to drop
							if (e.preventDefault) e.preventDefault();

							$timeout.cancel(leaveTimeout);

							dragOverClass = 'file-dragover';

							el.classList.add(dragOverClass)

						}
					}else {
						e.dataTransfer.dropEffect = 'none';
					}

					return false;
				},
				false
			);

			el.addEventListener(
				'dragleave',
				function(e) {

					leaveTimeout = $timeout(function () {
						if (dragOverClass) el.classList.remove(dragOverClass);
						dragOverClass = null;
					}, 100);

					return false;
				},
				false
			);

			el.addEventListener(
				'drop',
				function(e) {

					// allows us to drop
					if (e.preventDefault) e.preventDefault();

					if (dragOverClass) el.classList.remove(dragOverClass);
  					dragOverClass = null;


					return false;
				},
				false
			);

		}
    };

    return directive;
  }

  angular
    .module('shared.fileDroppable', [
      //
    ])
    .directive('fileDroppable', fileDroppable);
})();
