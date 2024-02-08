// Write a script that computes the number of tasks completed by user id.
// The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// Only print users with completed task
// You must use the module request

const request = require('request')
const url = 'https://jsonplaceholder.typicode.com/todos'

request.get(url, function (error, response, body) {
    if (error) {
        console.log(error)
        return
    } else {
        const listTodos = JSON.parse(body)
        // console.log(listTodos)

        const completedTasksByUser = {}

        // Iterate through tasks and count completed tasks by user id
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
