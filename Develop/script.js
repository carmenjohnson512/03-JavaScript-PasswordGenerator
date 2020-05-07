// Assignment Code
let generateBtn = document.querySelector("#generate");
let alphNumChar = "abcdegfhijklmnopqrstuvwxyz0123456789".split("");
// console.log("alphNumChar is working!", alphNumChar)
let specChar = " \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~".split("");
// console.log("specChar is working!!", specChar)
let alphNumCharUpper = function () {alphNumChar.toUpperCase()};
// console.log(alphNumCharUpper)
let alphNumCharLower = function () {alphNumChar.toLowerCase()};
// console.log(alphNumCharLower)
let alphNumCharChkBx = document.querySelector("#alphNumChar");
// console.log("AlphNum chk box slector is working!", alphNumCharChkBx)
let specCharChkBx = document.querySelector("#specChar");
// console.log("SpecChar chk box slector is working!", specCharChkBx)
let alphNumCharUpperChkBx = document.querySelector("#alphNumCharUpper");
// console.log("Alph Num Upper is working!", alphNumCharUpperChkBx)
let alphNumCharLowerChkBx = document.querySelector("#alphNumCharLower");
// console.log("Alph Num Lower is working!", alphNumCharLowerChkBx)



// declare function to select Alpha Numeric Character checkbox option
function includeAlphNumChar() {
  
}

// declare function to select Special Character checkbox option
function includeSpecChar() {

}

// declare function to select Uppercase option
function includeUpperCase() {

}

// declare function to select Lowercase option
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
