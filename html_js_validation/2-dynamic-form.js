// Implement JavaScript to generate a dynamic number of text input fields based on the selected value in the dropdown menu.

// Retrieve the selected value from the dropdown menu using JavaScript.

// Write a function called generateInputFields to generate the specified number of text input fields dynamically within the “inputContainer” div.

// The generateInputFields function should take the selected value from the dropdown menu as a parameter.

// Inside the generateInputFields function, use a loop or other appropriate logic to create the desired number of text input fields.

// Each text input field should have a unique name attribute, such as “field1”, “field2”, etc., to differentiate them.

// Append the dynamically generated text input fields to the “inputContainer” div.

// Implement JavaScript validation to ensure that all dynamically generated fields are filled before submitting the form.

// Write a function called validateForm to validate the form before submission.

// The validateForm function should be called when the form is submitted.

// Inside the validateForm function, retrieve the values entered in the dynamically generated text input fields using JavaScript.

// Check if any of the fields are empty. If any field is empty, prevent the form submission and display the error message “Please fill in all fields”.


// script.js

document.addEventListener("DOMContentLoaded", function () {
    const dynamicForm = document.getElementById("dynamicForm")
    const numFieldsSelect = document.getElementById("numFields")
    const inputContainer = document.getElementById("inputContainer")

    dynamicForm.addEventListener("submit", function (event) {
        event.preventDefault()
        if (validateForm()) {
            console.log("Form submitted successfully!")
        }
    })

    numFieldsSelect.addEventListener("change", function () {
        generateInputFields(parseInt(numFieldsSelect.value, 10))
    })

    function generateInputFields(numFields) {
        inputContainer.innerHTML = ""

        for (const i = 1; i <= numFields; i++) {
            const inputField = document.createElement("input")
            inputField.type = "text"
            inputField.name = "field" + i
            inputField.placeholder = "Field " + i
            inputContainer.appendChild(inputField)
        }
    }

    function validateForm() {
        const inputFields = inputContainer.querySelectorAll("input")

        for (const i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value.trim() === "") {
                alert("Please fill in all fields.")
                return false
            }
        }

        return true
    }
})
