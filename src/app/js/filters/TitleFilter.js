/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter () {
        return function(s) {
            s = ( s === undefined || s === null ) ? '' : s;
            return s.toString().toLowerCase().split(".stl").join("").split(".").join(" ").split("_").join(" ").replace( /\b([a-z])/g, function(ch) {
                return ch.toUpperCase();
            });
        };
	}

	angular.module('filter.title', [])
	  .filter('title', filter);
})();
