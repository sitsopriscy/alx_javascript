// Implement JavaScript validation to check the email format when the form is submitted.

// Retrieve the value entered in the email input field using JavaScript.

// Your JavaScript should be written in a separate file and used as an external script in the HTML code

// Write a function called validateEmail to validate the email based on the email format.

// The validateEmail function should check if the email follows the standard email format, which typically includes an alphanumeric username, followed by the @ symbol, and then the domain name.

// If the email format is correct, allow the form submission.

// If the email format is incorrect, display the error message “Please enter a valid email address.” in the

// element with the id "error".

// Prevent the default form submission behavior using JavaScript to prevent the form from submitting if the email format is not valid.

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("emailForm")
    const errorElement = document.getElementById("error")

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault()

        const emailInput = document.getElementById("email")
        const emailValue = emailInput.value.trim()

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }

        if (validateEmail(emailValue)) {
            emailForm.submit()
        } else {
            errorElement.textContent = "Please enter a valid email address."
        }
    })
})
