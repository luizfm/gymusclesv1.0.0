const express = require('express')
const routes = express.Router()
const instructors = require('../src/app/controllers/instructors')

routes.get("/", function(req, res) {
  return res.redirect("/home")
})

routes.get('/home', function(req, res) {
  return res.render('home/index')
})

routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id', instructors.show)
routes.post('/instructors', instructors.post)

module.exports = routes