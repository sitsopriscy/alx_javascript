// Write the following commands in the following order:
// Log to the console Start of the execution queue
// Log to the console Final code block to be executed using setTimeout (with delay of 0)
// Using a loop that iterates 100 times, each iteration logs to the console the iteration number
// Log to the console End of the loop printing

console.log('Start of the execution queue')

setTimeout(function () {
    console.log('Final code block to be executed')
})

for (i = 1; i <= 100; i++) {
    console.log(i)
}

console.log("End of the loop printing")
