/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function float () {
        return function(s) {
			return parseFloat(s);
        };
	}

	angular.module('filter.float', [])
	   .filter('float', float);
})();
