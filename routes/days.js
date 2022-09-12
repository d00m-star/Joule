const express = require('express')
const router = express.Router()
const { Days } = require('../models')

router.get('/', async function (req, res) {
  const days = await Days.findAll()
  res.json(days)
})

module.exports = router
