const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

function getUsers() {
  return db('users').select()
}

function createUser(newUser) {
  return db('users')
  .insert(newUser)
}

module.exports = {
  createUser,
  getUsers
}
