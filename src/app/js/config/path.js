/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

//Set main paths here.
window.PATH = window.PATH || {};

window.PATH.root 			=	window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

window.PATH.api 			= 	window.location.protocol + '//' + window.location.hostname + ':1337/api';

window.PATH.socket 			= 	window.location.protocol + '//' + window.location.hostname + ':1337';

window.PATH.app 			= 	window.PATH.root + '/app';

window.PATH.public 			= 	window.PATH.root + '/public';

window.PATH.assets 	= 		{
	javascripts: window.PATH.public + '/assets/javascripts/application.js',
	stylesheets: window.PATH.public + '/assets/stylesheets/application.css'
}

window.PATH.tmp 			= 	window.PATH.public + '/tmp';

window.PATH.partials 		= 	window.PATH.app + '/views/partials';

window.PATH.modelfiles 		= 	{
	uploadPath				: 	'',
	downloadPath 			: 	''
};

window.PATH.auth			=	{
	login: '/auth/login',
	logout: '/auth/logout',
	session: '/auth/session'
}

window.PATH.login 			= 	'/login';
