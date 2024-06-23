const db = require('./connection')
const { users, books } = require('./mockup-data')

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

const createBook = () => {
   const sql = `CREATE TABLE IF NOT EXISTS books (
      id VARCHAR(13) NOT NULL,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(255) NOT NULL,
      page_total INTEGER(11) NOT NULL,
      page_read INTEGER(11) NOT NULL,
      is_read TINYINT(1) NOT NULL,
      is_finished TINYINT(1) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
   )`

   db.query(sql, (err, result) => {
      if (err) {
         console.log(err)
      } else {
         console.log('Create book table...')
         setTimeout(() => {
            console.log('Book table created!')
         }, 2000)
      }
   })
}

const seedBook = () => {
   books.forEach((book) => {
      const sql = `INSERT INTO books
      (id, title, author, page_total, page_read, is_read, is_finished, created_at, updated_at)
      VALUES ('${book.id}', '${book.title}', '${book.author}', ${book.pageTotal}, ${book.pageRead}, 
      ${book.isRead ? 1 : 0}, ${book.isFinished ? 1 : 0}, '${book.createdAt}', '${book.updatedAt}')`

      db.query(sql, (err, result) => {
         if (err) {
            console.log(err)
         } else {
            console.log("Seed book table...")
            setTimeout(() => {
               console.log("Book table seeded!")
            }, 2000)
         }
      })
   })
}

const seed = () => {
   createUser()
   seedUser()
   createBook()
   seedBook()
}

seed()