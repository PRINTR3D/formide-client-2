/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService($rootScope, $timeout) {
        var factory = {};

        factory.list = [];
        factory.active = [];

        factory.getNotifications = function () {
            if(window.localStorage.getItem('formide.notifications:list')) {
                return JSON.parse(window.localStorage.getItem('formide.notifications:list'));
            }
            else {
                return [];
            }
        }

        factory.init = function() {
            factory.list = factory.getNotifications();
        }

        factory.addNotification = function (data) {
            var description = data.message || "";
            var channel = data.channel || 'system'
            var duration = data.duration || 4000;
            var actions = data.actions || {};
            var popup = data.popup || false;
            var title = data.title || "";
			var save = data.save || false;
			var link = data.urlLink;

			console.log('save', save);

            var type;

            switch (data.type) {
                case 'log':
                    type = 'log';
                    break;
                case 'error':
                    type = 'error';
                    break;
                case 'warn':
                    type = 'warn';
                    break;
                case 'info':
                    type = 'info';
                    break;
                case 'success':
                    type = 'success';
                    break;
                default:
                    if(window.DEBUG) console.info('Unknown notification type, used "log".');
                    type = 'log';
            }

            var notifications = factory.getNotifications() || [];

            if(title) {
                var found = false;
                var foundId = null;

                var timestamp = Date.now();

                for(var i = 0; i < notifications.length; i++) {
                    if (notifications[i].title === title && notifications[i].description === description) {

                        if(timestamp - parseInt(notifications[i].updatedAt) < 60*60*1000) {
                            found = true;
                            foundId = i;
                            break;
                        }
                    }
                }

                if(found) {
                    notifications[foundId].count++;
                    notifications[foundId].updatedAt = timestamp;
                }
                else if(save) {
                    notifications.unshift({
                        id: (factory.list.length + 1),
                        title: title,
                        description: description,
                        type: type,
                        count: 1,
                        channel: channel,
                        createdAt: timestamp,
                        updatedAt: timestamp,
						save: save,
						link: link
                    });

                    if(notifications.length > 10) {
                        notifications.pop();
                    }
                }

				if(save){
	                window.localStorage.setItem('formide.notifications:list', JSON.stringify(notifications));
				}

				factory.showNotification(title, description, type, duration, actions, popup, link);

                factory.list = notifications;

                $timeout(function () {
                    $rootScope.$emit("notification.saved", true);
                }, 50);
            }
        }

        factory.showNotification = function (title, description, type, duration, actions, popup, link) {
            var id = Math.floor(Math.random() * 9999);

            var notification = {
                id: id,
                title: title,
                message: description,
                type: type,
                actions: actions,
                popup: popup,
				link: link
            };

            factory.active.push(notification);

            if(duration > 0) {
                $timeout(function() {
                    factory.removeNotification(id);
                }, duration);
            }
        }

        factory.removeNotification = function (id) {
            angular.forEach(factory.active, function(notification, key) {
                if(notification.id === id) {
                    factory.active.splice(key, 1);
                }
            });

            return true;
        }

        factory.clearSingle = function(index) {
            for(var i in factory.list) {
                if(factory.list[i].id == parseInt(index)) {
                    factory.list.splice(i, 1);
                    window.localStorage.setItem('formide.notifications:list', JSON.stringify(factory.list));
                    break;
                }
            }
        }

        factory.clearAll = function () {
            window.localStorage.setItem('formide.notifications:list', JSON.stringify([]));
            factory.list = [];
        }

        return factory;
    }

    angular.module('service.notification', [])
        .factory('$notification', ['$rootScope', '$timeout', MainService]);

})();
