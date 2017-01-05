/**
* @Author: chris
* @Date:   2017-01-05T01:29:16+01:00
* @Filename: gpio.js
* @Last modified by:   chris
* @Last modified time: 2017-01-05T02:45:18+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const Gpio = require('onoff').Gpio

// pins
const CONTROL_PIN = new Gpio(90, 'out')
const STATUS_PIN = new Gpio(93, 'in', 'both')
const DTR_RESET_PIN = new Gpio(6, 'out')

// modes
const ELEMENT_IS_HOST = 'ELEMENT'
const USB_IS_HOST = 'USB'
const USB_PLUGGED_IN = 'plugged-in'
const USB_PLUGGED_OUT = 'plugged-out'

// set default to Element control since hardware default is USB
setTimeout(function () {
  CONTROL_PIN.writeSync(0)
}, 500)

// unexport GPIO when stopping formide-client process
process.on('SIGINT', function () {
  CONTROL_PIN.unexport()
  STATUS_PIN.unexport()
  DTR_RESET_PIN.unexport()
})

module.exports = {

  // export state values
  ELEMENT_IS_HOST,
  USB_IS_HOST,
  USB_PLUGGED_IN,
  USB_PLUGGED_OUT,

  /**
   * Get current value of control mode GPIO
   * @param callback
   */
  getControlMode (callback) {
    CONTROL_PIN.read(function (err, value) {
      if (err) return callback(err)

      value = +(value) // force integer value
      var mode = ''

      if (value === 0) {
        mode = ELEMENT_IS_HOST
      } else if (value === 1) {
        mode = USB_IS_HOST
      }

      return callback(null, mode)
    })
  },

  /**
   * Switch control mode between ELEMENT and USB
   * @param mode
   * @param callback
   */
  switchControlMode (mode, callback) {
    assert(mode, 'mode is a required parameter for switching control mode')

    CONTROL_PIN.read(function (err, oldValue) {
      if (err) return callback(err)

      let newValue

      if (mode === ELEMENT_IS_HOST) {
        newValue = 0
      } else if (mode === USB_IS_HOST) {
        newValue = 1
      } else {
        return callback(new Error('Invalid control mode'))
      }

      if (oldValue === newValue) return callback(null, 'OK')
      this.resetDTR()

      // set new control mode
      CONTROL_PIN.write(newValue, function (err) {
        if (err) return callback(err)
        this.resetDTR()
        return callback(null, 'OK')
      })
    })
  },

  /**
   * When USB is plugged in, emit an event to registered callback functions
   * @param callback
   */
  registerOnChange (callback) {
    STATUS_PIN.watch(function (err, value) {
      if (err) return callback(err)
      if (value === 0) {
        return callback(null, USB_PLUGGED_OUT)
      } else if (value === 1) {
        return callback(null, USB_PLUGGED_IN)
      } else {
        return callback(new Error('Not a valid USB status'))
      }
    })
  },

  /**
   * Toggle DTR reset line to the printer so the firmware picks up the new host
   */
  resetDTR () {
    DTR_RESET_PIN.writeSync(0)
    DTR_RESET_PIN.writeSync(1)
    return true
  }
}
