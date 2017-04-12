/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter ($sce) {
		return function(ss) {
			return $sce.trustAsHtml(ss);
		};
	}

	angular.module('filter.trustedHTML', [])
	  .filter('trustedHTML', filter);
})();
