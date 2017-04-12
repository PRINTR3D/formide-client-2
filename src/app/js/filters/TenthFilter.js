/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function tenth () {
        return function (number) {
            number = number || 0;

            return (number > 0) ? (Math.round(number / 10) * 10) : 0;
        };
	}

	angular.module('filter.tenth', [])
	   .filter('tenth', tenth);
})();
