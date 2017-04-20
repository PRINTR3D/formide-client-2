/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function loadingScreen($timeout) {
      return({
          link: link,
          restrict: "EA"
      });
      // I bind the JavaScript events to the scope.
      function link( scope, element, attributes ) {
            element.css('opacity', 0);

            $timeout(function() {
                element.remove();
                scope = element = attributes = null;
            }, 500);
      }
  }

  angular
    .module('shared.loadingScreen', [
      //
    ])
    .directive('loadingScreen', loadingScreen);
})();
