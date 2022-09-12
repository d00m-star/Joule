const express = require('express')
const router = express.Router()
const { Days } = require('../models')

router.get('/', async function (req, res) {
  const days = await Days.findAll()
  res.json(days)
})

router.delete('/:id', async function (req, res) {
  const { id } = req.params
  const day = await Day.destroy({ where: { id } })
  res.status(204).end()
})

router.put('/:id', async function (req, res) {
  const { id } = req.params
  const { name } = req.body
  try {
    const day = await Day.findByPk(id)
    await day.update({ name, type })
    res.json(day)
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(422).json(errorMessages(e))
    }
    throw e
    res.status(500).end()
  }
})

module.exports = router
