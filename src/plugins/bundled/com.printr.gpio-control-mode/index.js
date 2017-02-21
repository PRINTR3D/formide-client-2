'use strict'

const pkg = require('./package.json')
const api = require('./api')

class GpioControl extends Plugin {

  constructor (client) {
    super(client, pkg)
    try {
      this._gpio = require('./gpio')
    } catch (e) {
      client.logger.log('com.printr.gpio-control-mode: Could not load GPIO on this system', 'warning')
    }
  }

  getApi (router) {
    return api(this, router)
  }

  /**
   * Get the current control mode for integrated printers
   * @param callback
   */
  getControlMode (callback) {
    if (!this._gpio) return callback(new Error('gpio not available on this system'))
    this._gpio.getControlMode(callback)
  }

  /**
   * Change the control mode for integrated printers
   * @param mode
   * @param callback
   */
  setControlMode (mode, callback) {
    if (!this._gpio) return callback(new Error('gpio not available on this system'))
    this._gpio.switchControlMode(mode, function (err, result) {
      if (err) return callback(err)
      this.emit('switched', {
        message: `USB control mode was swithed to ${mode}`,
        switchResult: result,
        mode
      })
      return callback(null, result)
    })
  }

  /**
   * Enable events from USB plugging
   * @param callback
   */
  enableControlMode (callback) {
    if (!this._gpio) return callback(new Error('gpio not available on this system'))
    this._gpio.registerOnChange(function (err, newValue) {
      if (err) return this._client.logger.log(`[com.printr.gpio-control-mode] - Error handling USB switch event: ${err.message}`, 1, 'warn')
      this.emit(newValue, {
        message: `USB host was changed to ${newValue}`,
        state: newValue
      })
      if (newValue === this._gpio.USB_PLUGGED_OUT) {
        this._gpio.switchControlMode(this._gpio.ELEMENT_IS_HOST, function (err, result) {
          if (err) this._client.logger.log(`[com.printr.gpio-control-mode] - Error handling USB switch back: ${err.message}`, 1, 'warn')
        }.bind(this))
      }
    }.bind(this))
    callback()
  }
}

module.exports = GpioControl
