/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function removeFiletype () {
        return function(s) {
			if(s) return s.replace(/(\.[^/.]+)+$/, "");
        };
	}

	angular.module('filter.removeFiletype', [])
	   .filter('removeFiletype', removeFiletype);
})();
