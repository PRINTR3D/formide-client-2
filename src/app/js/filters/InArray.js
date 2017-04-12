/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter ($filter) {
		return function(list, arrayFilter, element){
			if(arrayFilter){
				return $filter("filter")(list, function(listItem){
					return arrayFilter.indexOf(listItem[element]) != -1;
				});
			}
		};
	}

	angular.module('filter.inArray', [])
	  .filter('inArray', filter);
})();
