'use strict';

/**
 * This thread file separates the driver process from the main client process
 * resulting in smoother communication between connected printers and the rest of the system.
 * Without this structure, printers can stutter when other parts of the client are in use.
 */

const Globals = require('../globals');

let driver = false;

try {
    driver = require('formide-drivers');
}
catch (e) {
    Globals.log(e.message, 1, 'error');
}

if (driver)
    driver.start(function (err, started, event) {
        if (err)
            process.send({type: 'error', data: err});
        else if (started)
            process.send({type: 'started', data: started});
        else if (event) // every time an event comes from the drivers we pass it to the main thread
            process.send({type: 'event', data: event});
        else
            console.log('dunno');
    });

// call a driver function when messages comes in from main thread
process.on('message', function (message) {

    // Incoming message should contain method, data and callbackId.
    // The callbackId is passed back when the function is done executing
    // so the main thread can process the callback data asynchronously.
    if (message.method && message.data && message.callbackId) {
        message.data.push(function (err, response) {
            process.send({ type: 'callback', callbackId: message.callbackId, err, result: response });
        });

        if (driver)
            driver[message.method].apply(null, message.data);
    }
});
