/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function timestamp () {
        return function(s) {
           if(s) return Date.parse(s);
        };
	}

	angular.module('filter.timestamp', [])
	   .filter('timestamp', timestamp);
})();
