// Implement JavaScript validation to check the password strength when the form is submitted.
// Retrieve the value entered in the password input field using JavaScript.
// Your JavaScript should be written in a separate file and used as an external script in the HTML code

// Write a function called validatePassword to validate the password based on the provided criteria.

// The validatePassword function should check the following criteria:

// The password must be at least 8 characters long.

// The password must contain at least one uppercase letter.

// The password must contain at least one lowercase letter.

// The password must contain at least one numeric digit.

// The password must contain at least one special character (e.g., !@#$%^&*).

// If the password meets all the criteria, allow the form submission.

// If the password does not meet the criteria, display an appropriate error message in the <p> element with the id “error” .

// File: 0-password-strength.js

document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('passwordForm')
    const errorParagraph = document.getElementById('error')

    passwordForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const passwordInput = document.getElementById('password')
        const password = passwordInput.value

        function validatePassword(password) {
            const minLength = 8
            const hasUppercase = /[A-Z]/.test(password)
            const hasLowercase = /[a-z]/.test(password)
            const hasDigit = /\d/.test(password)
            const hasSpecialChar = /[!@#$%^&*]/.test(password)

            return (
                password.length >= minLength &&
                hasUppercase &&
                hasLowercase &&
                hasDigit &&
                hasSpecialChar
            )
        }

        if (validatePassword(password)) {
            errorParagraph.textContent = ''
            passwordForm.submit()
        } else {
            errorParagraph.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*).'
        }
    })


})
