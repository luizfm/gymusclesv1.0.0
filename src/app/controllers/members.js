const Member = require('../controllers/models/Member')

module.exports = {
  index(req, res) {
    Member.all(function(members) {
      return res.render('members/index', { members })
    })
    
  },
  create(req, res) {

  },
  post(req, res) {

  },
  show(req, res) {

  },
  edit(req, res) {

  },
  update(req, res) {

  },
  delete(req, res) {

  }
}