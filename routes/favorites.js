const express = require('express')
const router = express.Router()
const { Favorites } = require('../models')

router.get('/', async function (req, res) {
  const favorites = await Favorites.findAll()
  res.json(favorites)
})

router.delete('/:id', async function (req, res) {
  const { id } = req.params
  const favorite = await Favorite.destroy({ where: { id } })
  res.status(204).end()
})

module.exports = router
