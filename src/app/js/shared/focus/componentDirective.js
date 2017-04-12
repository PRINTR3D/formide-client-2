/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function focus($timeout, $parse) {
    var directive = {
		restrict: "A",
		link: function (scope, element, attrs) {
			var model = $parse(attrs.focus);
			scope.$watch(model, function(value) {
				if(value === true) {
					$timeout(function() {
						element[0].focus();
					});
				}
			});
			element.bind('blur', function() {
				scope.$apply(model.assign(scope, false));
			});
			scope.$on('$destroy', function() {
				element.unbind('blur')
			});
  	  	}
    };

    return directive;
  }

  angular
    .module('shared.focus', [
      //
    ])
    .directive('focus', focus);
})();
