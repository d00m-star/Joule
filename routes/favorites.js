const express = require('express')
const router = express.Router()
const { Favorites } = require('../models')

const errorMessages = (validationError) =>
  validationError.errors.reduce((obj, error) => {
    obj[error.path] = error.message
    return obj
  }, {})

router.get('/', async function (req, res) {
  const favorite = await Favorites.findAll()
  res.json(favorite)
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
