(function () {
	function seconds () {
        return function(s) {
           return moment.duration(s, "milliseconds").format("s [seconds]");
        };
	}

	angular.module('filter.seconds', [])
	   .filter('seconds', seconds);
})();
