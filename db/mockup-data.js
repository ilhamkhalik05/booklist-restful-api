const { generateID, getCurrentDateTime } = require('../utils/function')

const users = [
   {
      id: generateID(),
      name: 'John Doe',
      email: 'johndoe@gmail',
      password: 'john123'
   },
   {
      id: generateID(),
      name: 'Alyssa',
      email: 'alyssa@gmail',
      password: 'alyssa123'
   },
   {
      id: generateID(),
      name: 'Gerrard Way',
      email: 'gerrardway@gmail',
      password: 'gerrard123'
   },
]

const books = [
   {
      id: generateID(),
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel Garcia Marquez',
      pageTotal: 100,
      pageRead: 0,
      isRead: false,
      isFinished: false,
      createdAt: getCurrentDateTime(),
      updatedAt: getCurrentDateTime()
   },
   {
      id: generateID(),
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      pageTotal: 200,
      pageRead: 0,
      isRead: false,
      isFinished: false,
      createdAt: getCurrentDateTime(),
      updatedAt: getCurrentDateTime()
   },
   {
      id: generateID(),
      title: 'The Lord of the Rings',
      author: 'J. R. R. Tolkien',
      pageTotal: 300,
      pageRead: 0,
      isRead: false,
      isFinished: false,
      createdAt: getCurrentDateTime(),
      updatedAt: getCurrentDateTime()
   },
]

module.exports = { users, books }