/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService() {
        var factory = {};

		factory.invisible = (window.localStorage.getItem("formide.sidebar:invisible") === 'true');

        factory.setSidebar = function(controller, template, width) {
            factory.sidebar = {
                width: width || 340,
                controller: controller || 'SidebarController',
                template: template || 'sidebar/componentTemplate.html'
            };
        }

		factory.setInvisible = function () {
			window.scrollTo(0, 0);
			factory.invisible = factory.invisible ? false : true;
			window.localStorage.setItem("formide.sidebar:invisible", factory.invisible);
		};

		factory.setHide = function () {
			factory.sidebar = false;
		};

		factory.setShow = function () {
			factory.sidebar = true;
		};

        return factory;
    }

    angular.module('service.sidebar', [])
        .factory('Sidebar', [MainService]);

})();
