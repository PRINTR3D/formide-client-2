'use strict'

function getCurrentVersion () {

}

function getUpdateStatus () {

}

function checkForUpdate () {

}

function update () {
  // step 1: download install script from remote source (same as for first install), make sure that user has correct permissions
  // step 2: execute script to replace app source and do needed configuration
  // step 3: reboot device
}

module.exports = {
  getCurrentVersion,
  getUpdateStatus,
  checkForUpdate,
  update
}
