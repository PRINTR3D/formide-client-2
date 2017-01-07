/**
* @Author: chris
* @Date:   2016-12-18T17:23:12+01:00
* @Filename: index.js
* @Last modified by:   chris
* @Last modified time: 2017-01-07T16:34:18+01:00
* @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl
*/

'use strict'

const assert = require('assert')
const co = require('co')

class Slicer {

  constructor (client) {
    assert(client, '[slicer] - client not passed')

    this._client = client

    // TODO: use same threading setup as drivers?
    try {
      this.katana = require('katana-slicer')
      this._version = require('katana-slicer/package.json').version
      this._reference = require('katana-slicer/reference.json')
      client.log(`Loaded Katana v${this._version}`, 'info')
    } catch (e) {
      client.log(`Cannot load Katana binary: ${e.message}`, 'error')
    }
  }

  getVersion () {
    return this._version
  }

  slice (options, callback) {
    assert(options.userId, 'options.userId not passed')
    assert(options.name, 'options.name not passed')
    assert(options.files, 'options.files not passed')
    assert(options.sliceProfile, 'options.sliceProfile not passed')
    assert(options.materials, 'options.materials not passed')
    assert(options.printer, 'options.printer not passed')
    assert(options.settings, 'options.settings not passed')

    co(function* () {
      yield this._client.utils.diskSpace.hasSpaceLeft() // if no space left, error callback will be fired
      const files = yield this._client.db.File.find({ [global.MONGO_ID_FIELD]: options.files })
      const fileNames = files.map(function (file) { return file.name }).join(' + ')
      const responseId = ''
      const printJob = this._client.db.PrintJob.create({
        name: options.name || fileNames,
        files: options.files,
        printer: options.printer,
        sliceProfile: options.sliceProfile,
        materials: options.materials,
        sliceFinished: false,
        sliceSettings: options.settings,
        sliceMethod: 'local',
        createdBy: options.userId,
        responseId: responseId
      })
      const sliceRequest = yield this.createSliceRequest(printJob)

      // return printjob to front-end before start actual slicing
      callback(null, { data: printJob })

      this._client.events.emit('slicer.started', {
        title: 'Slicing started',
        message: `Started slicing ${printJob.name}`,
        data: sliceRequest
      })

      // build request for slicing engine
      const sliceData = JSON.stringify({ type: 'slice', data: sliceRequest })
      const referenceData = JSON.stringify(this._reference)

      this.katana.slice(sliceData, referenceData, function (response) {
        co(function* () {
          try {
            const responseData = JSON.parse(response)

            if (responseData.status === 200) {
              const updatedPrintJob = yield this._client.db.PrintJob.findOneAndUpdate({
                responseId: responseData.data.responseId
              }, {
                gcode: responseData.data.hash,
                sliceResponse: responseData.data,
                sliceFinished: true
              })

              responseData.data.printJob = updatedPrintJob.id
              this._client.event.emit('slicer.finished', {
                title: 'Slicing finished',
                message: `Finished slicing ${updatedPrintJob.name}`
              })
            } else {
              const updatedPrintJob = yield this._client.db.PrintJob.findOneAndUpdate({
                responseId: responseData.data.responseId
              }, {
                sliceResponse: responseData.data,
                sliceFinished: false
              })

              responseData.data.printJob = updatedPrintJob.id
              this._client.event.emit('slicer.failed', {
                title: 'Slicing failed',
                message: `There was an issue slicing ${updatedPrintJob.name}: ${responseData.data.msg}`,
                status: responseData.status,
                data: responseData.data
              })
            }
          } catch (e) {
            this._client.log(`Error parsing slicer response: ${e.message}`, 'error')
          }
        })
      })
    }.bind(this)).then(null, callback)
  }

  createSliceRequest () {
    return new Promise(function (resolve, reject) {
      // TODO: create slice request, don't forget to add 'gcode' type
    })
  }

  /**
   * Get reference file for Katana slice engine
   * @returns {*}
   */
  getReferenceFile () {
    return this._reference
  }
}

module.exports = Slicer
