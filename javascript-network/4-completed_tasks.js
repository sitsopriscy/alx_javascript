// Write a script that computes the number of tasks completed by user id.
// The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// Only print users with completed task
// You must use the module request

const request = require('request')
const url = process.argv[2]

request.get(url, function (error, response, body) {
    if (error) {
        console.log(error)
        return
    } else {
        const listTodos = JSON.parse(body)
       

        const completedTasksByUser = {}

        listTodos.forEach(function (task) {
            if (task.completed) {
                if (completedTasksByUser[task.userId]) {
                    completedTasksByUser[task.userId]++
                } else {
                    completedTasksByUser[task.userId] = 1
                }
            }
        })
        console.log(completedTasksByUser);
    }
})
