const { nanoid } = require('nanoid')

const generateID = () => {
   return nanoid(13)
}

const getCurrentDateTime = () => {
   return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

const convertBoolToTinyInt = (boolean) => {
   if (boolean) return 1
   return 0
}

module.exports = { generateID, getCurrentDateTime, convertBoolToTinyInt }
