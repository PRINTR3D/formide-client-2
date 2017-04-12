/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

function angularLoaded() {
    if(window.ENV.type == 'development' || window.ENV.type == 'testing')
    {
        console.groupCollapsed("Development- or Testing Mode");
       	if(window.DEBUG)
       	{
       		console.log("Debugging Mode: On");
       	}
       	else
       	{
       		console.log("Debugging Mode: Off", "color: red;");
       	}
        console.groupEnd();

        console.groupCollapsed("App", window.ENV.name);
           	console.log("Environment", window.ENV);
        	console.log("Paths", window.PATH);
        console.groupEnd();

    }
    else if(window.DEBUG)
    {
    	console.log("Debugging Mode: On", "color: blue;");
    }

    if (window.DEBUG) {
    	console.time("Angular loaded");
    }
}
