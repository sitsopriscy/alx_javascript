// Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
// The first argument is the movie ID
// You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
// You must use the module request

const request = require("request")
const endpoint = 'https://swapi-api.alx-tools.com/api/films/${id}'

request.get(endpoint, function (error, response, body) {
    const bodyMovie = JSON.parse(body)
    console.log(bodyMovie.title)
})

