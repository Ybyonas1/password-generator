// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split('');
console.log(lowerLetters[0]);
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "1234567890".split('');
var specialLetters = "!@#$%^&*()|".split('');

function generatePassword() {
  var characters = prompt("Please enter a password with 8-128 characters");
  console.log(characters)
  var totalCharacters = parseInt(characters);
  if (totalCharacters >= 8 && totalCharacters <= 128) {
    // Ask user if they would want to include lowercase letter, if so, include those in options
    var confirmLowercase = confirm("Would you like lowercase letters?");
    var confirmUppercase = confirm("Would you like to include uppercase letters?");
    var confirmNumbers = confirm("Would you like to include numbers?");
    var confirmSpecLetters = confirm("Would you like to include special letters?");

    var newPassword = []
    var possibleCharacters = [];
    if (confirmLowercase) {
      // console.log(letters);
      possibleCharacters = possibleCharacters.concat(lowerLetters);
    }

    if (confirmUppercase) {
      possibleCharacters = possibleCharacters.concat(upperLetters);
    }

    if (confirmNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
    }

    if (confirmSpecLetters) {
      possibleCharacters = possibleCharacters.concat(specialLetters)
    }
    console.log(possibleCharacters);

    for (var i = 0; i < totalCharacters; i++) {
      var randomDecimal = Math.random() * possibleCharacters.length
      console.log(randomDecimal);
      var randomNum = Math.floor(randomDecimal);
      console.log(randomNum);
      newPassword.push(possibleCharacters[randomNum])
      console.log(newPassword)

    }
    return newPassword.join("");

    // ------ HOW DO I VALIDATE------

    console.log("Good Times");
  } else {
    console.log("Nope");
    alert("Nope only 8-128 chatacters, try again");

    generatePassword();
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
