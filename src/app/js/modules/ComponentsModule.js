var module = module || {};

module.components = angular.module('module.components', [
	'components.connect',
	'components.manage',
	'components.manageDevice',
	'components.manageDeviceUpdate',
	'components.fileLibrary',
	'components.monitorPrint',
	'components.controlPrint',
	'components.authLogin'
]);
