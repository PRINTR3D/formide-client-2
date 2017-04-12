/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function timeAgo () {
        return function(s) {
            return moment(s, [moment.ISO_8601, 'x']).fromNow();
        };
	}

	angular.module('filter.timeAgo', [])
	   .filter('timeAgo', timeAgo);
})();
