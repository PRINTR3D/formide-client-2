/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function smartduration () {
        return function (number) {
			var date = new Date(number * 100);
			var str = '';

			var days = date.getUTCDate() - 1;
			var hours = date.getUTCHours();
			var minutes = date.getUTCMinutes();
			var seconds = date.getUTCSeconds();


			if(days > 0) {
				str += days + " days";
			  str += (hours > 0) ? " and " : " ";
			}

			if(hours > 0) {
				str += hours + " hours";
			  str += (hours < 5 && days < 1) ? " and " : " ";
			}

			if(hours < 5 && days < 1 && minutes > 0) {
				str += minutes + " minutes";
			  str += (hours < 1 && minutes < 5) ? " and " : " ";
			}

			if(hours < 1 && days < 1 && minutes < 5) {
				str += seconds + " seconds";
			}

			return str;
        };
	}

	angular.module('filter.smartduration', [])
	   .filter('smartduration', smartduration);
})();
