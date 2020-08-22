// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password object declaration
var Password = {
    // Length of Password
    length: 0,

    // Char sets variables
    lowerCase: false,
    upperCase: false,
    numericChars: false,
    specialChars: false,

    // Arrays for char type sets
    charSetArray: [],
    lowerCaseArray: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperCaseArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numericArray: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    specialArray: ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'],

    // Function to check if length of password is valid
    validLength: function() {
        if (this.length < 8 || this.length > 128) {
            return false;
        } else {
            return true;
        }
    },

    // Functions for prompts and confirms

    // Function to prompt for password length and update length in Password Object
    lengthPrompt: function() {
        // Prompt user to enter length between 8 and 128
        this.length = prompt(
            "Choose length of password (Length must be between 8 and 128 characters long)"
        );

        // Check if input is correct length, alert and prompt again if not
        if (this.validLength() === false) {
            alert("Password must be between 8 and 128 characters long");
            this.lengthPrompt();
        }
    },

    // Lower case prompt and add char set to charSetArr
    lowerCaseConfirm: function() {
        this.lowerCase = confirm("Would you like lower case characters?");
        if (this.lowerCase === true) {
            this.addLowerCaseChars();
        }
    },

    // Upper case prompt and add char set to charSetArr
    upperCaseConfirm: function() {
        this.upperCase = confirm("Would you like upper case characters?");
        if (this.upperCase === true) {
            this.addUpperCaseChars();
        }
    },

    // Numeric characters prompt and add char set to charSetArr
    numericCharsConfirm: function() {
        this.numericChars = confirm("Would you like numeric characters?");
        if (this.numericChars === true) {
            this.addNumericChars();
        }
    },

    // Special characters prompt and add char set to charSetArr
    specialCharsConfirm: function() {
        this.specialChars = confirm("Would you like special characters?");
        if (this.specialChars === true) {
            this.addSpecialChars();
        }
    }
};

// Generate password function
function generatePassword() {
    // Random number variable declaration
    var randomNum;

    // Prompt for length of password, length is checked and validated or prompted again
    Password.lengthPrompt();

    // Confirm for all the different character types
    Password.lowerCaseConfirm();
    Password.upperCaseConfirm();
    Password.numericCharsConfirm();
    Password.specialCharsConfirm();

    // For each character of the password add a random characters based on the criteria
    for (var i = 0; i < Password.length; i++) {
        // Pick a charset
        // Pick from that charset
    }

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