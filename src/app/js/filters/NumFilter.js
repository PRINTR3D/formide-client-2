/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function num () {
        return function(s) {
			return parseInt(s, 10);
        };
	}

	angular.module('filter.num', [])
	   .filter('num', num);
})();
