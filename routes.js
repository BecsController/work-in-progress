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

router.get('/stories', (req, res) => {
  db.getStories()
  .then((stories) => {
    res.render('storieshome', {stories})
  })
})

router.post('/new', (req, res) => {
  let newUser = {
    name: req.body.name,
    email: req.body.email,
    avatar: req.body.avatar
  }
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
    res.render('userpage', user)
  })
})

router.get('/story/:id', (req, res) => {
  let id = req.params.id
  db.getStory(id).then(story => {
    res.render('stories/homepage', story)
  })
})

router.get('/story/:id/page-one', (req, res) => {
  let id = req.params.id
  db.getStory(id).then(story => {
    res.render('stories/school/school-page-one', story)
  })
})

// router.post('/story/:id/page-one', (req, res) => {
//   let emotion = req.body.
//
// })

router.get('/users', (req, res) => {
  db.getUsers().then(users => {
    res.render('users', {users})
  })
})

module.exports = router
