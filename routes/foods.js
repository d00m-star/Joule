var express = require('express')
var router = express.Router()
const { Food } = require('../models')

router.get('/', async function (req, res, next) {
  const foods = await Food.findAll()
  res.json(foods)
})

module.exports = router
