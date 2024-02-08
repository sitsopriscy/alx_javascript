// Create a variable named globalVariable with value Welcome
// Create a function outer that:
// alerts the content of the variable globalVariable
// creates a variable named course with value Holberton
// creates a function inner that:
// alerts the content of the variable globalVariable and course (concatenated)
// creates a variable named exclamation with value !
// creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
// calls the function inception
// calls the function inner
// Call the function outer

// Compose the code:
// Write the function inception within inner
// Write the function inner within outer
// Call the function outer in the main code (outside any function)
// Call the function inner within outer
// Call the function inception within inner

let globalVariable = 'Welcome'
function outer() {
    alert(globalVariable)
    let course = 'Holberton'

    function inner() {
        alert(globalVariable + ' ' + course)
        let exclamation = '!'

        function inception() {
            alert(globalVariable + ' ' + course + ' ' + exclamation)
        }
        inception()
    }
    inner()
}
outer()
