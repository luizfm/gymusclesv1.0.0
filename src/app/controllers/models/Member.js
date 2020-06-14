const db = require('../../config/db')
const { date, age } = require('../../lib/utils')

module.exports = {
  all(callback) {
    try {

      db.query(`SELECT * FROM members`, function(err, results) {
        if(err) throw 'Database error'

        callback(results.rows)
      })

    } catch(err) {
      console.error(err)
    }
  },
  create(data, callback) {
    const query = `
      INSERT INTO members (
        name,
        height,
        weight,
        gender,
        birth,
        services,
        avatar_url
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `

    const values = [
      data.name,
      data.height,
      data.weight,
      data.gender,
      date(data.birth).iso,
      data.services,
      data.avatar_url
    ]

    db.query(query, values, function(err, results) {
      if(err) throw 'Database error'

      callback(results.rows[0])
    })
  },
  find(id, callback) {
    db.query(`SELECT * FROM members WHERE id = $1`, [id], function(err, results) {
      if(err) throw 'Database error'

      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
      UPDATE members SET
      name = ($1),
      height = ($2),
      weight = ($3),
      gender = ($4),
      birth = ($5),
      services = ($6),
      avatar_url = ($7)
      WHERE id = $8
    `

    const values = [
      data.name,
      data.height,
      data.weight,
      data.gender,
      date(data.birth).iso,
      data.services,
      data.avatar_url,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if(err) throw 'Database error'

      callback(results.rows[0])
    })

  },
  delete(id, callback) {
    db.query(`DELETE FROM members WHERE id = $1`, [id], function(err, results) {
      if(err) throw 'Instructor not found'

      callback();
    })
  }
}