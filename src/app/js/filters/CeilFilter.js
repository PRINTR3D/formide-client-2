/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter () {
		return function(s) {
			return Math.ceil(s);
		};
	}

	angular.module('filter.ceil', [])
	  .filter('ceil', filter);
})();
