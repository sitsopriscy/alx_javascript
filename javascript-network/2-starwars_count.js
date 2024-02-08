// Write a script that prints the number of movies where the character “Wedge Antilles” is present.
// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request

const request = require('request')
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/'

const characterId = 18

request.get(apiUrl, function (error, response, body) {
    const filmsData = JSON.parse(body)
    
    const filmsWithWedge = filmsData.results.filter(function (film) {
        return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    })
    console.log(filmsWithWedge.length)
})

