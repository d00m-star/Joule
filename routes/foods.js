const express = require('express')
const { ValidationError } = require('sequelize')
const router = express.Router()
const { Food } = require('../models')

const errorMessages = (validationError) =>
  validationError.errors.reduce((obj, error) => {
    obj[error.path] = error.message
    return obj
  }, {})

router.get('/', async function (req, res) {
  // const foods = await Food.findAll({})
  res.send('yes this works')
})

router.get('/:id', async function (req, res) {
  const { id } = req.params
  const food = await Food.findByPk(id)
  res.json(food)
})

router.post('/', async function (req, res) {
  const { name, type } = req.body
  try {
    const food = await Food.create({ name, type })
    res.status(201).json(food)
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(422).json(errorMessages(e))
    }
    res.status(500).end()
  }
})

router.put('/:id', async function (req, res) {
  const { id } = req.params
  const { name, type } = req.body
  try {
    const food = await Food.findByPk(id)
    await food.update({ name, type })
    res.json(food)
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(422).json(errorMessages(e))
    }
    throw e
    res.status(500).end()
  }
})

router.delete('/:id', async function (req, res) {
  const { id } = req.params
  const food = await Food.destroy({ where: { id } })
  res.status(204).end()
})

module.exports = router
