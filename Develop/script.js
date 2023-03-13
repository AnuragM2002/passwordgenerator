// Assignment code here
function alertMessage() {
  window.alert("Invalid input. Please try again.");
}

function generatePassword() {
  var prompts = [
    "Choose the character length of your password. [Enter a number between 8 and 128]",
    "Include lowercase letters? [Enter Yes or No]",
    "Include upperacse letters? [Enter Yes or No]",
    "Include numbers? [Enter Yes or No]",
    "Include special characters? (ex. !@#$%^&*) [Enter Yes or No"
  ]
  var characters = [0, 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '1234567890', '!@#$%^&*()']
  var usedCharacters = [];
  var password = '';

  var userInput = window.prompt(prompts[0]);
  if (userInput >= 8 && userInput <= 128) {
    characters[0] = userInput;

    for (var i = 1; i < prompts.length; i++) {
      userInput = window.prompt(prompts[i]);
      if (userInput === null) {
        { break; }
      } else if (userInput.toLowerCase() == 'yes') {
        usedCharacters.push(characters[i]);
      } else if (userInput.toLowerCase() == 'no') {
        continue;
      } else {
        alertMessage();
        i--;
      }
    }

  } else {
    return 'Invalid parameters. Please try tgain.';
  }
  
  if (usedCharacters.length === 0) {
    return 'Invalid parameters. Please select "Yes" for at least one character type.' 
  }
  
  var passwordCharacters = usedCharacters.join('');
  for (var i = 0; i < characters[0]; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length))
  }

  console.log(password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
