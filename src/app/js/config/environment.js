/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */
// Put general configuration here.

window.ENV = window.ENV || {};

window.ENV.name 			=	'formide-os';

window.ENV.type				= 	'development'; //development || testing || production

window.DEBUG				=	(window.ENV.type == 'development' || window.ENV.type == 'testing') ? true : false;
