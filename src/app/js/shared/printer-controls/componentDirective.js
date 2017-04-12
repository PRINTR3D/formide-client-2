/*
 *	This code was created for Printr B.V. It is open source under the formideos-interface package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a element with printer controls for controlling a 3D printer.
 */

(function () {
    function printerControls() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'printer-controls/componentTemplate.html',
            scope: {
                extruders: '=',
				disableInput: '='
            },
            transclude: true,
            controller: MainController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    function MainController(printerCtrl, $timeout) {
        var vm = this;

		vm.extruders = vm.extruders || {};
		vm.disableInput = vm.disableInput || false;

		vm.extruderWidth = {'width': (vm.extruders.length * 65) + 'px'};

        // private functions
        function opacity(value, array, range) {
            value = Math.abs(value);

            var length = (array.length - 1);

            var step = (range[1] - range[0]) / length;

            return range[0] + (step * (length - array.indexOf(value)));
        }

        // public functions
        var axis = [
            {
                key: 'x',
                orientation: 'vertical',
                positive: [100, 10, 1, .1],
                negative: [-.1, -1, -10, -100]
		    },
            {
                key: 'y',
                orientation: 'horizontal',
                positive: [100, 10, 1, .1],
                negative: [-.1, -1, -10, -100]
		    },
            {
                key: 'z',
                orientation: 'vertical',
                positive: [100, 10, 1, .1],
                negative: [-.1, -1, -10, -100]
		    }
	    ];

        var extruder_settings = {
            orientation: 'vertical',
            extrude: [100, 10, 1, .1],
			retract: [100, 10, 1, .1]
        };

        for (extruder in vm.extruders) {
            for (var attrname in extruder_settings) {
                vm.extruders[extruder][attrname] = extruder_settings[
                    attrname];
            }
        }

        function setOpacity(value, array) {
            return opacity(value, array, [0.25, 1]);
        }

        function move(key, item) {
            vm.printerCtrl.move(key, parseFloat(item));
        }

        // exports
        angular.extend(vm, {
            axis: axis,
            move: move,
            setOpacity: setOpacity,
            printerCtrl: printerCtrl,
            extruder_settings: extruder_settings
        });
    }


    MainController.$inject = [
    'printerCtrl', '$timeout'
  ];

    angular
        .module('shared.printerControls', [
      //
    ])
        .directive('printerControls', printerControls);
})();
