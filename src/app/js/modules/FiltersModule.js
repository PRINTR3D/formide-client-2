var module = module || {};

module.filters = angular.module('module.filters', [
    'filter.ceil',
    'filter.title',
    'filter.num',
    'filter.bool',
    'filter.removeFiletype',
    'filter.removeDashes',
    'filter.bytes',
    'filter.slice',
    'filter.duration',
    'filter.timeAgo',
    'filter.timestamp',
	'filter.tenth',
	'filter.float',
	'filter.seconds',
	'filter.unique',
	'filter.smartduration',
	'filter.smartbytes',
	'filter.propsFilter',
	'filter.trustedHTML',
	'filter.inArray'
]);
