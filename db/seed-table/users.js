const db = require('../connection')
const { users } = require('../mockup-data')

const createUser = () => {
   const sql = `CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(13) NOT NULL,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
   )`

   db.query(sql, (err, result) => {
      if (err) {
         console.log(err)
      } else {
         console.log('Create user table...')
         setTimeout(() => {
            console.log('User table created!')
         }, 2000)
      }
   })
}

const seedUser = () => {
   users.forEach((user) => {
      const sql = `INSERT INTO users (id, name, email, password)
      VALUES ('${user.id}', '${user.name}', '${user.email}', '${user.password}')`

      db.query(sql, (err, result) => {
         if (err) {
            console.log(err)
         } else {
            console.log('Seed user table...')
            setTimeout(() => {
               console.log('User table seeded!')
            }, 2000)
         }
      })
   })

}

const seed = () => {
   createUser()
   seedUser()
}

seed()
module.exports = { createUser, seedUser }