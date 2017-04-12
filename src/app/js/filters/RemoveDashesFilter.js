/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function removeDashes () {
        return function(s) {
			if(s) return s.replace(/[_-]/g, " ");
        };
	}

	angular.module('filter.removeDashes', [])
	   .filter('removeDashes', removeDashes);
})();
