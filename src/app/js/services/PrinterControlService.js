/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService($api, Printer, $filter) {
        var factory = {};

        function port(port) {
			return encodeURIComponent(port);
        }

        function post(data) {

            if (data == undefined || data == null) {
                console.error('Data not defined.');
            } else {
                if (data.port == undefined) {
                    console.error('No port selected.');
                } else {

                    var urlParams = [];
                    for (key in data.parameters) {
                        urlParams.push(key + '=' + data.parameters[key]);
                    }

					if (data.commands) {
						var api_url = '/printer/' + data.port + "/commands/" + data.method;
					}
					else {
						var api_url = '/printer/' + data.port + "/" + data.method;
					}

                    if (window.DEBUG) console.log("Url: ", api_url);

					$api.post(api_url, data.parameters)
                        .then(function (response) {
                            if (window.DEBUG) console.log("Data: ", data);
                    });

                }
            }

            if (window.DEBUG) {
                console.groupEnd();
            }

            return true;
        }


        factory.gcode = function (gcode) {
            return post({
                method: 'gcode',
                parameters: {
                    command: gcode
                },
                port: port(Printer.$active.port)
            });
        }

		factory.tune = function (gcode) {
            return post({
                method: 'tune',
                parameters: {
                    command: gcode
                },
                port: port(Printer.$active.port)
            });
        }

        factory.jog = function (axis, distance) {
            return post({
                method: 'jog',
				commands: true,
                parameters: {
                    axis: axis,
                    dist: parseFloat(distance)
                },
                port: port(Printer.$active.port)
            });
        }

        factory.move = function (axis, distance) {
            return this.jog(axis, distance);
        }

        factory.bed = {
            temperature: function (temperature) {
                return post({
                    method: 'temp_bed',
					commands: true,
                    parameters: {
                        temp: parseInt(temperature)
                    },
                    port: port(Printer.$active.port)
                });
            }
        }

        factory.extruder = function (id) {
            return {
                temperature: function (temperature) {
                    return post({
                        method: 'temp_extruder',
						commands: true,
                        parameters: {
                            temp: parseInt(temperature),
                            extnr: id
                        },
                        port: port(Printer.$active.port)
                    });
                },
                extrude: function (distance) {
                    return post({
                        method: 'extrude',
						commands: true,
                        parameters: {
                            dist: parseFloat(distance),
                            extnr: id
                        },
                        port: port(Printer.$active.port)
                    });
                },
                retract: function (distance) {
					if (Printer.$active.deviceVersion && $filter('majorVersion')(Printer.$active.deviceVersion) < 2) {
						// pre client v2 distance fix
						distance = distance * -1;
					}

                    return post({
                        method: 'retract',
						commands: true,
                        parameters: {
                            dist: parseFloat(distance),
                            extnr: id
                        },
                        port: port(Printer.$active.port)
                    });
                }
            }
        }

        factory.home = {
            all: function () {
                return post({
                    method: 'home',
					commands: true,
                    port: port(Printer.$active.port)
                });
            },
            x: function () {
                return post({
                    method: 'home_x',
					commands: true,
                    port: port(Printer.$active.port)
                });
            },
            y: function () {
                return post({
                    method: 'home_y',
					commands: true,
                    port: port(Printer.$active.port)
                });
            },
            z: function () {
                return post({
                    method: 'home_z',
					commands: true,
                    port: port(Printer.$active.port)
                });
            }
        }

        factory.print = function (gcode) {
			return post({
                method: 'print',
                port: port(Printer.$active.port),
				parameters: {
					file: gcode.path
				}
            });
        }

        factory.pause = function () {
            return post({
                method: 'pause',
                port: port(Printer.$active.port)
            });
        }

        factory.resume = function () {
            return post({
                method: 'resume',
                port: port(Printer.$active.port)
            });
        }

        factory.stop = function () {
            return post({
                method: 'stop',
                port: port(Printer.$active.port)
            });
        }

        factory.stopAll = function () {
            return post({
                method: 'stop_all',
				commands: true,
                port: port(Printer.$active.port)
            });
        }

        factory.LCDMessage = function (message) {
            return post({
                method: 'lcd_message',
				commands: true,
                parameters: {
                    message: message
                },
                port: port(port)
            });
        }

        return factory;
    }

    angular.module('service.api.printerControl', [])
        .factory('printerCtrl', ['$api', 'Printer', '$filter', MainService]);

})();
