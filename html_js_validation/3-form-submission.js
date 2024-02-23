// Implement JavaScript to handle form submission and perform validation before submitting.

// Write a function called handleFormSubmit to handle the form submission.

// Your JavaScript should be written in a separate file and used as an external script in the HTML code.

// Add an event listener to the form element to listen for the “submit” event and call the handleFormSubmit function.

// Inside the handleFormSubmit function, prevent the default form submission behavior using event.preventDefault().

// Retrieve the values entered in the form fields using JavaScript.

// Use JavaScript validation to ensure that all required fields are filled.

// Check if the “name” and “email” fields are filled. If any of them are empty, display the error message “Please fill in all required fields”.

// If all validations pass, display a success message “Form submitted successfully!” .

// If any validations fail, do not submit the form and allow the user to correct the errors before submitting again.


// script.js

document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("submitForm")

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault()

        handleFormSubmit()
    })

    function handleFormSubmit() {
        const nameInput = document.getElementById("name")
        const emailInput = document.getElementById("email")

        const nameValue = nameInput.value.trim()
        const emailValue = emailInput.value.trim()

        if (validateForm(nameValue, emailValue)) {
            alert("Form submitted successfully!")
        }
    }

    function validateForm(name, email) {
        if (name === "" || email === "") {
            alert("Please fill in all required fields.")
            return false
        }

        return true
    }
})
