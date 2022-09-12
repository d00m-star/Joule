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

router.put('/:id', async function (req, res) {
  const { id } = req.params
  const { name } = req.body
  try {
    const favorite = await Favorite.findByPk(id)
    await favorite.update({ name, type })
    res.json(favorite)
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(422).json(errorMessages(e))
    }
    throw e
    res.status(500).end()
  }
})
module.exports = router
