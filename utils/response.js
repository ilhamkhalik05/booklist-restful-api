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

const serverErrorResponse = (res) => {
   res.status(500).json({
      status_code: 500,
      status_text: "Failed",
      message: "Internal Server Error",
   })
}

module.exports = { response, responseWithData, serverErrorResponse }