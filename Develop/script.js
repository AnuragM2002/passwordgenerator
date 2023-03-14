// Assignment code here
// Creates an alert message when the user has an input other than "yes" or "no".
function alertMessage() {
  window.alert("Invalid input. Please try again.");
}

//Generates a password between 8 and 128 characters based on the user's selected criteria.
//Returns the output as a string.
function generatePassword() {
  //An array of prompts with questions that the user will be asked regarding what types of characters will be used.
  var prompts = [
    "Choose the character length of your password. [Enter a number between 8 and 128]",
    "Include lowercase letters? [Enter Yes or No]",
    "Include upperacse letters? [Enter Yes or No]",
    "Include numbers? [Enter Yes or No]",
    "Include special characters? (ex. !@#$%^&*) [Enter Yes or No]"
  ]

  //The 'characters' array stores all teh available characters that the user can select from. It also stores the length of the password.
  //The 'usedCharacters' array stores elements from the 'characters' array as the user selects them to be used for the password generation.
  var characters = [0, 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '1234567890', '!@#$%^&*()']
  var usedCharacters = [];
  var password = '';

  //Asks user for a desired password length and stores the information. Then it uses a for loop to ask a series of "yes" or "no" questions from the prompts array.
  //If the user presses 'cancel' it causes the whole process to restart.
  //If the user selects yes, it will take the corresponding element from the 'characters' array and pushes it to the 'usedCharacters' array.
  //The index of a question in 'prompts' has to match the index of the character type in 'characters' so that the iterator can select the right one.
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

  //If the user selects "no" for every prompt it will give a message and will restart the process.
  if (usedCharacters.length === 0) {
    return 'Invalid parameters. Please select "Yes" for at least one character type.' 
  }

  //The passwordCharacters variable stores all of the user's selected characters as a string. 
  //The forloop iterates a number of times based on the user's selected password length.
  //In each iteration, a random character is selected from the 'usedCharacters' array and concatenated with the 'password' string.
  var passwordCharacters = usedCharacters.join('');
  for (var i = 0; i < characters[0]; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length))
  }
  
  //The previous forloop has an issue where the generated password will not always contain each of the selected character types.
  //This forloop changes the password to ensure that all selected types will be used.
  //Creates a temporary array to manipulate the 'password' string.
  //Adds a random character from each selected type, so that the password's first 4 characters will always meet the user's criteria.
  var tempArr = password.split('');
  for (var i = 0; i < usedCharacters.length; i++) {
    var str = usedCharacters[i];
    tempArr[i] = str.charAt(Math.floor(Math.random() * str.length));
  }
  var finalPassword = tempArr.join('');
  return finalPassword;
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
