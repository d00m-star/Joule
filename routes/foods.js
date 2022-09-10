var express = require('express')
var router = express.Router()
const { Food } = require('../models')

router.get('/', async function (req, res) {
  const foods = await Food.findAll()
  res.json(foods)
})

router.get('/:id', async function (req, res) {
  const { id } = req.params
  const food = await Food.findByPk(id)
  res.json(food)
})

router.post('/', async function (req, res) {
  const { name, type } = req.body
  const food = await Food.create({ name, type })
  res.json(food)
})

router.put('/:id', async function (req, res) {
  const food = await Food.update()
  res.json(food)
})

router.delete('/:id', async function (req, res) {
  const food = await Food.delete()
  res.json(food)
})

module.exports = router
