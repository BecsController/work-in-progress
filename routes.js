let express = require('express')
let router = express.Router()
const db = require('./db')
// let story = require('./story')

//home page
router.get('/', (req, res) => {
  res.render('home')
})

router.get('/signup', (req, res) => {
  res.render('newUser')
})

router.post('/new', (req, res) => {
  let newUser = {
    name: req.body.name,
    email: req.body.email,
    avatar: req.body.avatar
  }
  console.log(newUser)
  db.createUser(newUser)
  .then(() => {
    res.redirect('/users')
  })
})

router.post('/updateUser/:id', (req, res) => {
  let id = req.params.id
  let updatedInfo = {
    id: id,
    name: req.body.name,
    email: req.body.email,
    avatar: req.body.avatar
  }
  db.updateUser(id, updatedInfo)
  .then(() => {
    res.redirect(`/users`)
  })
})

router.get('/user/:id', (req, res) => {
  let id = req.params.id
  db.getUser(id).then(user => {
    console.log(user)
    res.render('userpage', user)
  })
})

router.get('/users', (req, res) => {
  db.getUsers().then(users => {
    res.render('users', {users})
  })
})

module.exports = router
