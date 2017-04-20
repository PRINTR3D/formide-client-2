/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function bool () {
        return function (s) {
            s.isChecked = !!+s.isChecked;
            return s;
        };
	}

	angular.module('filter.bool', [])
	   .filter('bool', bool);
})();
