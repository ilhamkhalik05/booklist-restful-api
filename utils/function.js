const { nanoid } = require('nanoid')

const generateID = () => {
   return nanoid(13)
}

const getCurrentDateTime = () => {
   return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

module.exports = { generateID, getCurrentDateTime }
