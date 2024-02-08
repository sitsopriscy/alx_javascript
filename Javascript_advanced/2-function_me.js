// Write a function named welcomeMessage:
// It accepts one argument fullName (string)
// It should be a closure for an alert displaying Welcome <fullName>

// After this function definition, create three variables:
// guillaume contains a call welcomeMessage with Guillaume as argument
// alex contains a call welcomeMessage with Alex as argument
// fred contains a call welcomeMessage with Fred as argument

function welcomeMessage(fullName) {
    return function () {
        alert('Welcome' + ' ' + fullName)
    }
}

const guillaume = welcomeMessage('Guillaume')
const alex = welcomeMessage('Alex')
const fred = welcomeMessage('Fred')
