// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphNumChar = "abcdegfhijklmnopqrstuvwxyz0123456789".split("");
console.log("alphNumChar is working!", alphNumChar)
let specChar = " \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~".split("");
console.log("specChar is working!!", specChar)
let alphNumCharUpper = function () {alphNumChar.toUpperCase()};
console.log(alphNumCharUpper)
let alphNumCharLower = function () {alphNumChar.toLowerCase()};
console.log(alphNumCharLower)

// declare function to select Alpha Numeric Character checkbox option
function includeAlphNumChar() {
  
}

// declare function to select Special Character checkbox option
function includeSpecChar() {

}
// declare function to select Special Character checkbox option
function includeUpperCase() {

}
function includeLowerCase() {

}



// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
