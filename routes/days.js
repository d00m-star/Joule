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

module.exports = router
