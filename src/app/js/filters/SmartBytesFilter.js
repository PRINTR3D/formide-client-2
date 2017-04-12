/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function smartbytes () {
        var units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB'
        ];

        return function( bytes, precision ) {
            if ( isNaN( parseFloat( bytes )) || ! isFinite( bytes ) ) {  // test for invalid input
                return '?';
            }

            var unit = 0;

            while ( bytes >= 1024 ) {
                bytes /= 1024;
                unit ++;
            }

			if (bytes % 1 === 0) {
				return bytes + ' ' + units[ unit ];
			}else {
				return bytes.toFixed( + precision ) + ' ' + units[ unit ];
			}
        };
	}

	angular.module('filter.smartbytes', [])
	   .filter('smartbytes', smartbytes);
})();
