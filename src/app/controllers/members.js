const { age, date } = require('../lib/utils')

const Member = require('../controllers/models/Member')

function fillAllTheFields(keys, data) {
  for (key of keys) {
    if(data[key] == "") {
      return res.render('Please, fill all the fields')
    }
  }
}

module.exports = {
  index(req, res) {
    Member.all(function(members) {


      return res.render('members/index', { members })
    })
    
  },
  create(req, res) {
    return res.render('members/create')
  },
  post(req, res) {

    const keys = Object.keys(req.body)

    fillAllTheFields(keys, req.body)

    Member.create(req.body, function(member) {
      return res.redirect(`members/${member.id}`)
    })

  },
  show(req, res) {
    Member.find(req.params.id, function(member) {


      member.birth = age(member.birth)
      member.services = member.services.split(',')
      
      return res.render('members/show', { member })
    })
    
  },
  edit(req, res) {
    Member.find(req.params.id, function(member) {
      if(!member) return res.send('Member not found!')

      member.birth = date(member.birth).iso

      return res.render('members/edit', { member })
    })
  },
  update(req, res) {
    const keys = Object.keys(req.body)

    fillAllTheFields(keys, req.body)

    Member.update(req.body, function() {
      return res.redirect(`members/${req.body.id}`)
    })
  },
  delete(req, res) {
    Member.delete(req.body.id, function() {
      return res.redirect('/members')
    })
  }
}