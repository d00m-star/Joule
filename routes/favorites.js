const express = require('express')
const router = express.Router()
const { Favorites } = require('../models')

router.get('/', async function (req, res) {
  const favorites = await Favorites.findAll()
  res.json(favorites)
})

module.exports = router