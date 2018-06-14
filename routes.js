let express = require('express')
let router = express.Router()
const db = require('./db')
let story = require('./story')

//home page
router.get('/', (req, res) => {
  res.render('home')
})

router.post('/newProfile', (req, res) => {
  let newUser = {
    name: req.body.name,
    email: req.body.email,
    avatar: req.body.avatar
  }
  console.log(newUser)
  db.createUser().then(() => {
    res.redirect("/users")
  })
})

router.get('/users', (req, res) => {
  db.getUsers().then(users => {
    res.render('users', {users})
  })
})

module.exports = router
