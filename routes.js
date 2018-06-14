let express = require('express')
let router = express.Router()
const db = require('./db')
let story = require('./story')

//home page
router.get('/', (req, res) => {
  res.render('home')
})

module.exports = router
