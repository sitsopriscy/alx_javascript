// Write a script that display the status code of a GET request.
// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request (NB: It must be installed if you haven’t already installed it)

// const request = require('request')

const request = require('request')
const endpoint = 'http://google.com/img.png'

request(endpoint, function (error, response, body) {
    console.log(response.statusCode)
})