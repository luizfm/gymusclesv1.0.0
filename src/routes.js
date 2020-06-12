const express = require('express')
const routes = express.Router()
const instructors = require('../src/app/controllers/instructors')

routes.get("/", function(req, res) {
  return res.redirect("/home")
})

routes.get('/home', function(req, res) {
  return res.render('home/index')
})

routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id/edit', instructors.edit)
routes.get('/instructors/:id', instructors.show)

routes.post('/instructors', instructors.post)
routes.put('/instructors', instructors.update)
routes.delete('/instructors', instructors.delete)

module.exports = routes