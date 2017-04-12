/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService($rootScope, $timeout) {
        var factory = {};

        factory.setSidebar = function(controller, template, width) {
            $rootScope.sidebar = {
                width: width || 360,
                controller: controller || 'SidebarController',
                template: template || 'sidebar/componentTemplate.html'
            };
        }

        return factory;
    }

    angular.module('service.sidebar', [])
        .factory('$sidebar', ['$rootScope', '$timeout', MainService]);

})();
