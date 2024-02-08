// Write a script that prints the number of movies where the character “Wedge Antilles” is present.
// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request

const request = require('request')
const apiUrl = process.argv[2]
const endpoint = 'https://swapi-api.alx-tools.com/api/films/'
const characterId = 18
let count = 0

request.get(endpoint, function (error, response, body) {
    if (error) {
        console.error(error.message)
    } else {
        const filmsData = JSON.parse(body)
        filmsData.results.forEach(function (film) {
            film.characters.forEach(function (character) {
                if (character.includes(`/${characterId}/`)) {
                    count += 1
                }
            })
        })
        console.log(count)
    }
})
