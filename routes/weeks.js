var express = require('express')
const { ValidationError } = require('sequelize')
var router = express.Router()
const { Week } = require('../models')

const errorMessages = (validationError) =>
  validationError.errors.reduce((obj, error) => {
    obj[error.path] = error.message
    return obj
  }, {})

router.get('/weeks', async function (req, res) {
  const weeks = await Week.findAll({})
  res.json(weeks)
})

router.get('/weeks/:id', async function (req, res) {
  const { id } = req.params
  const week = await Week.findByPk(id)
  res.json(week)
})

router.post('/weeks', async function (req, res) {
  const { name } = req.body
  try {
    const week = await Week.create({ name })
    res.status(201).json(week)
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(422).json(errorMessages(e))
    }
    res.status(500).end()
  }
})

router.put('/weeks/:id', async function (req, res) {
  const { id } = req.params
  const { name } = req.body
  try {
    const week = await Week.findByPk(id)
    await week.update({ name })
    res.json(week)
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(422).json(errorMessages(e))
    }
    throw e
    res.status(500).end()
  }
})

router.delete('/weeks/:id', async function (req, res) {
  const { id } = req.params
  const week = await Week.destroy({ where: { id } })
  res.status(204).end()
})

module.exports = router
