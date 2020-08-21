// Assignment Code
var generateBtn = document.querySelector("#generate");

var Password = {
    length: 0,
    lowerCase: false,
    upperCase: false,
    numericChars: false,
    specialChars: false,
    validLength: function() {
        if (this.length < 8 || this.length > 128) {
            return false;
        } else {
            return true;
        }
    },
    lengthPrompt: function() {
        this.length = prompt(
            "Choose length of password (Length must be between 8 and 128 characters long)"
        );
        console.log(Password.length);
        if (this.validLength() === false) {
            alert("Password must be between 8 and 128 characters long");
            this.lengthPrompt();
        }
    },
    lowerCaseConfirm: function() {
        this.lowerCase = confirm("Would you like lower case characters?");
    },
    upperCaseConfirm: function() {
        this.upperCase = confirm("Would you like upper case characters?");
    },
    numericCharsConfirm: function() {
        this.numericChars = confirm("Would you like numeric characters?");
    },
    specialCharsConfirm: function() {
        this.specialChars = confirm("Would you like special characters?");
    },
};

function generatePassword() {
    // GIVEN I need a new, secure password
    // WHEN I click the button to generate a password
    // THEN I am presented with a series of prompts for password criteria
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password

    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters

    // Prompt for length of password, length is checked and validated or prompted again
    Password.lengthPrompt();

    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected

    // Confirm for all the different character types
    Password.lowerCaseConfirm();
    Password.upperCaseConfirm();
    Password.numericCharsConfirm();
    Password.specialCharsConfirm();

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria

    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);