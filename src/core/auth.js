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
	}
	
	/**
	 * Find a user by username
	 * @param username
	 * @returns {*|T|{}}
	 */
	find (username) {
		return this.store.find(user => user.username === username)
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
				
				// return user without password
				return resolve({ id: newUser.id, username: newUser.username })
			})
		})
	}
	
	updateUser (id, username, password) {
	
	}
	
	removeUser (id) {
	
	}
	
	resetUsers () {
		fs.writeFileSync(this.path, JSON.stringify([])) // write empty array
		return this.createUser(defaultUser.username, defaultUser.password) // create default admin user
	}
}

module.exports = Auth
