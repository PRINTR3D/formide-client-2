/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function onEnter() {
    var directive = {
		restrict: "A",
		link: function (scope, element, attrs) {
			element.bind('keydown', function(e) {
				if (event.which === 13) {
					scope.$apply(function (){
	                    scope.$eval(attrs.onEnter);
	                });
					event.preventDefault();
				}
			});
			scope.$on('$destroy', function() {
				element.unbind('keydown')
			});
  	  	}
    };

    return directive;
  }

  angular
    .module('shared.onEnter', [
      //
    ])
    .directive('onEnter', onEnter);
})();
