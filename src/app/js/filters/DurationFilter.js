/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function duration () {
        return function(s) {
           return moment.duration(s, "seconds").format("h [hours]", 2);
        };
	}

	angular.module('filter.duration', [])
	   .filter('duration', duration);
})();
