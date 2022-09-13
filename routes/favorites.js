var express = require('express')
const { ValidationError } = require('sequelize')
var router = express.Router()
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

router.post('/', async function (req, res) {
  const { name } = req.body
  try {
    const favorites = await Favorites.create({ name })
    res.status(201).json(favorites)
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(422).json(errorMessages(e))
    }
    res.status(500).end()
  }
})

router.delete('/:id', async function (req, res) {
  const { id } = req.params
  const favorite = await Favorites.destroy({ where: { id } })
  res.status(204).end()
})

router.put('/:id', async function (req, res) {
  const { id } = req.params
  const { name } = req.body
  try {
    const favorite = await Favorites.findByPk(id)
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
