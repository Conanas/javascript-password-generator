// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password object declaration
var Password = {
    // Actual Password
    password: "",

    // Length of Password
    length: 0,

    // Verified
    verified: false,

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

    // Lower case confirm and add lowerCaseArray to charSetArray
    lowerCaseConfirm: function() {
        this.lowerCase = confirm("Would you like lower case characters?");
        if (this.lowerCase === true) {
            this.charSetArray = this.charSetArray.concat(this.lowerCaseArray);
        }
    },

    // Upper case confirm and add upperCaseArray to charSetArray
    upperCaseConfirm: function() {
        this.upperCase = confirm("Would you like upper case characters?");
        if (this.upperCase === true) {
            this.charSetArray = this.charSetArray.concat(this.upperCaseArray);
        }
    },

    // Numeric characters confirm and add numericArray to charSetArray
    numericCharsConfirm: function() {
        this.numericChars = confirm("Would you like numeric characters?");
        if (this.numericChars === true) {
            this.charSetArray = this.charSetArray.concat(this.numericArray);
        }
    },

    // Special characters confirm and add specialArray to charSetArray
    specialCharsConfirm: function() {
        this.specialChars = confirm("Would you like special characters?");
        if (this.specialChars === true) {
            this.charSetArray = this.charSetArray.concat(this.specialArray);
        }
    },

    // Verifies if the password has at least from each of the character sets
    verifyPassword: function() {

        // Declare boolean variables for verify function
        var hasLowerCase = false;
        var hasUpperCase = false;
        var hasNumeric = false;
        var hasSpecial = false;

        // Check if password has lower case characters
        if (this.lowerCase) {
            for (var i = 0; i < this.length; i++) {
                if (this.lowerCaseArray.includes(this.password[i])) {
                    hasLowerCase = true;
                    break;
                }
            }
        }

        // Check if password has upper case characters
        if (this.upperCase) {
            for (var i = 0; i < this.length; i++) {
                if (this.upperCaseArray.includes(this.password[i])) {
                    hasUpperCase = true;
                    break;
                }
            }
        }

        // Check if password has numeric characters
        if (this.numericChars) {
            for (var i = 0; i < this.length; i++) {
                if (this.numericArray.includes(this.password[i])) {
                    hasNumeric = true;
                    break;
                }
            }
        }

        // Check if password has special characters
        if (this.specialChars) {
            for (var i = 0; i < this.length; i++) {
                if (this.specialArray.includes(this.password[i])) {
                    hasSpecial = true;
                    break;
                }
            }
        }

        // Final check if password can be verified if not verified then clear password
        if (((this.lowerCase && hasLowerCase) || (this.lowerCase === false && hasLowerCase === false)) &&
            ((this.upperCase && hasUpperCase) || (this.upperCase === false && hasUpperCase === false)) &&
            ((this.numericChars && hasNumeric) || (this.numericChars === false && hasNumeric === false)) &&
            ((this.specialChars && hasSpecial) || (this.specialChars === false && hasSpecial === false))) {
            this.verified = true;
        } else {
            this.verified = false;
            this.password = "";
        }

    },

    // Clear password and charSetArray if new password is requested
    clearPassword: function() {
        this.password = "";
        this.length = 0;
        this.charSetArray = [];
        this.verified = false;
        this.lowerCase = false;
        this.upperCase = false;
        this.numericChars = false;
        this.specialChars = false;
    }
};

// Generate password function
function generatePassword() {

    // Declare variables for random number and new character
    var randomNum = 0;
    var newChar = '';

    // Clears old password if generating another password
    Password.clearPassword();

    // Prompt for length of password, length is checked and validated or prompted again
    Password.lengthPrompt();

    // Confirm for all the different character types
    Password.lowerCaseConfirm();
    Password.upperCaseConfirm();
    Password.numericCharsConfirm();
    Password.specialCharsConfirm();

    // Check if user has inputted at least 1 character set


    // While password is not verified then create password
    while (Password.verified === false) {
        // For each character of the password add a random characters based on the criteria
        for (var i = 0; i < Password.length; i++) {
            randomNum = Math.floor(Math.random() * Password.charSetArray.length);
            newChar = Password.charSetArray[randomNum];
            Password.password = Password.password.concat(newChar);
        }
        Password.verifyPassword();
    }

    // Return the new password to be written to the textArea
    return Password.password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);