// Assignment code here
var characterLength = 0;
var lowerCase = '';
var upperCase = '';
var numbers = '';
var special = '';
var passwordParameters = [characterLength, lowerCase, upperCase, numbers, special]
var prompts = [
  "Choose the character length of your password. [Enter a number between 8 and 128]",
  "Include lowercase letters? [Enter Yes or No]",
  "Include upperacse letters? [Enter Yes or No]",
  "Include numbers? [Enter Yes or No]",
  "Include special characters? (ex. !@#$%^&*) [Enter Yes or No"
]

function alertMessage() {
  window.alert("Invalid input. Please try again.");
}

function yesOrNo() {
  for (var i = 1; i < prompts.length; i++) {
    var userInput = window.prompt(prompts[i]);
    if (userInput === null) {
      {break;}
    } else if (userInput.toLowerCase() === 'yes' || userInput.toLowerCase() === 'no') {
      passwordParameters[i] = userInput;
    } else {
      alertMessage();
      i--;
    }
  }
}

function generatePassword() {
  var userInput = window.prompt(prompts[0]);
  if (userInput > 8 && userInput < 128) {
    characterLength = userInput;
    yesOrNo();
  } else {
    return 'Invalid parameters. Please try tgain.';
  }
  
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
