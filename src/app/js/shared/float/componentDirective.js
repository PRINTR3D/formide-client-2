/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 *
 */

(function () {
  function float() {
    var directive = {
        require: 'ngModel',
        link: function(scope, ele, attr, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                return parseFloat(viewValue);
            });
        }
    };

    return directive;
  }

  angular
    .module('shared.float', [
      //
    ])
    .directive('float', float);
})();
