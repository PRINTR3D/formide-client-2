'use strict'

const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const defaultUser = { username: 'admin@local', password: 'admin' }

/**
 * Auth class
 */
class Auth {
	
	constructor (client) {
		this._client = client
		this.path = path.resolve(client.config.paths.storageDir, 'auth.json')
		
		// create auth.json when not found
		if (!fs.existsSync(this.path)) fs.writeFileSync(this.path, JSON.stringify([]))
		this.store = require(this.path)
		
		// validate existing users
		this._validateUsers()
		
		// check total amount of users, if 0, create default admin user
		if (this.store.length === 0) {
			this.resetUsers().then(() => {
				client.log(`Created default admin user since there were no users`, 'info')
			}).catch((err) => {
				client.log(`Error creating default admin user: ${err.message}`, 'warning')
			})
		}
	}
	
	/**
	 * Validate all existing users
	 * @returns {boolean}
	 * @private
	 */
	_validateUsers () {
		const self = this
		this.store.map((user, index) => {
			if (user === null || typeof user !== 'object' || !user.id || !user.username || !user.password) {
				self.store.splice(index, 1)
				fs.writeFileSync(self.path, JSON.stringify(self.store))
			}
		})
		return true
	}
	
	/**
	 * Get the default user
	 * @returns {{username: string, password: string}}
	 */
	getDefaultUser () {
		return defaultUser
	}
	
	/**
	 * Find all users
	 * @returns []
	 */
	findAll () {
		const users = this.store.map((user) => {
			return { id: user.id, username: user.username }
		})
		return users
	}
	
	/**
	 * Find a user by username
	 * @param username
	 * @returns {*|T|{}}
	 */
	find (value, field) {
		field = field || 'username'
		const user = this.store.find((user) => {
			if (!user || user === null) return false
			return user[field] === value
		})
		if (user) return user
		return false
	}
	
	/**
	 * Authenticate a user against the JSON store
	 * @param username
	 * @param password
	 * @returns {Promise}
	 */
	authenticate (username, password) {
		const self = this
		return new Promise((resolve, reject) => {
			const user = self.find(username)
			if (!user || !user.password) return resolve(false)
			bcrypt.compare(password, user.password, function (err, isMatch) {
				if (err) return reject(err)
				if (!isMatch) return resolve(false)
				return resolve({ id: user.id, username: user.username }) // return user without password
			})
		})
	}
	
	/**
	 * Create a new user with username and password
	 * @param username
	 * @param password
	 * @returns {Promise}
	 */
	createUser (username, password) {
		const self = this
		return new Promise((resolve, reject) => {
			const user = self.find(username)
			if (user) return resolve(false)
			
			bcrypt.hash(password, 10, function (err, hash) {
				if (err) return reject(err)
				
				// create and store new user
				const newUser = { id: uuid.v4(), username, password: hash }
				self.store.push(newUser)
				fs.writeFileSync(self.path, JSON.stringify(self.store))
				
				// return new user without password
				return resolve({ id: newUser.id, username: newUser.username })
			})
		})
	}
	
	/**
	 * Update user username and password by id
	 * @param id
	 * @param username
	 * @param password
	 * @returns {Promise}
	 */
	updateUser (id, username, password) {
		const self = this
		return new Promise((resolve, reject) => {
			const user = self.find(id, 'id')
			if (!user) return resolve(false)
			
			bcrypt.hash(password, 10, function (err, hash) {
				if (err) return reject(err)
				
				// update existing user by array index
				const updatedUser = { id: user.id, username: username, password: hash }
				const index = self.store.indexOf(user)
				if (index > -1) {
					self.store[index] = updatedUser
					fs.writeFileSync(self.path, JSON.stringify(self.store))
				}
				
				// return updated user without password
				return resolve({ id: updatedUser.id, username: username })
			})
		})
	}
	
	/**
	 * Remove user by id
	 * @param id
	 * @returns {Promise}
	 */
	removeUser (id) {
		const self = this
		return new Promise((resolve, reject) => {
			const user = self.find(id, 'id')
			if (!user) return resolve(false)
			
			// get index and remove user
			const index = self.store.indexOf(user)
			if (index > -1) {
				self.store.splice(index, 1)
				fs.writeFileSync(self.path, JSON.stringify(self.store))
			}
			
			return resolve(true)
		})
	}
	
	/**
	 * Reset users state
	 * @returns {Promise}
	 */
	resetUsers () {
		this.store = []
		fs.writeFileSync(this.path, JSON.stringify(this.store)) // write empty array
		return this.createUser(defaultUser.username, defaultUser.password) // create default admin user
	}
}

module.exports = Auth
