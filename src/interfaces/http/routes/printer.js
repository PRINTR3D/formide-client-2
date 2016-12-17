'use strict';

const router = require('express').Router();

module.exports = function(client) {

    /**
     * @api {GET} /api/printer Get status of all connected printers
     * @apiGroup Printer
     * @apiDescription Get the status of all printers that are currently connected to the device.
     * @apiVersion 1.0.0
     */
    router.get('/', function (req, res) {
        client.drivers.getStatus(function (err, status) {
            if (err) return res.serverError(err);
            return res.ok(status);
        });
    });

    /**
     * @api {GET} /api/printer/:port Get status of printer on selected port
     * @apiGroup Printer
     * @apiDescription Get the status of the printer that's connected to the port given in the URI parameter
     * @apiVersion 1.0.0
     */
    router.get('/:port', function (req, res) {
        client.drivers.getStatusByPort('/dev/tty.USB0', function (err, status) {
            if (err) return res.serverError(err);
            return res.ok(status);
        });
    });

    return router;
}