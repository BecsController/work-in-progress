let express = require('express')
let router = express.Router()
let fs = require('fs')
let story = require('./story')

//home page
router.get('/', (req, res) => {
  let playerArr = {}
  playerArr.players = tournament.getCompetitors();
  res.render('home', playerArr)
})

module.exports = router
