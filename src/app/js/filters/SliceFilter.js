/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function slice () {
        return function(arr, start, end) {

          return (arr || []).slice(start, end);
        };
	}

	angular.module('filter.slice', [])
	   .filter('slice', slice);
})();
