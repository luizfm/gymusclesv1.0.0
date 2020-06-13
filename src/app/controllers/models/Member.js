const db = require('../../config/db')

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
  }
}