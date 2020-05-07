// Assignment Code
var generateBtn = document.querySelector("#generate");
let numy = [0,1,2,3,4,5,6,7,8,9];
let lCase = "abcdefghijklmnopqrstuvwxyz";
let lCaseArray = lCase.split("");
let uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let uCaseArray = uCase.split("");
let alphNumChar = "abcdegfhijklmnopqrstuvwxyz0123456789"
let specChar = " \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~";
let specCharArray = specChar.split("");



// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
