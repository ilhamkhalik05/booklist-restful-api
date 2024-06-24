const responseWithData = (res, statusCode, statusText, message, data) => {
   res.status(statusCode).json({
      status_code: statusCode,
      status_text: statusText,
      message,
      data
   })
}

const response = (res, statusCode, statusText, message) => {
   res.status(statusCode).json({
      status_code: statusCode,
      status_text: statusText,
      message
   })
}

module.exports = { response, responseWithData }