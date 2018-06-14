const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

function createUser(newUser) {
  return db('users').insert(newUser)
}

function getUsers() {
  return db('users').select()
}

module.exports = {
  createUser,
  getUsers
}
