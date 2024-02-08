// Write a script that prints all characters of a Star Wars movie:
// The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// Display one character name by line
// You must use the Star wars API
// You must use the module request

const request = require("request")
const movieID = process.argv[2]
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`

if (movieID > 2) {
    request(url, function (error, response, body) {
        if (error) {
            return console.error(error)
        }
        const movies = JSON.parse(body)
        movies.characters.forEach(function (characterURL) {
            request(characterURL, function (error, response, body) {
                if (error) {
                    return console.error(error)
                }
                const character = JSON.parse(body)
                console.log(character.name)
            })
        })
    })
}
