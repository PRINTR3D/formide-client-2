var module = module || {};

module.services = angular.module('module.services', [
    'service.api',
    'service.api.printerControl',
    'service.auth',
    'service.printer',
    'service.notification',
    'service.socket',
    'service.file',
	'service.sidebar'
]);
