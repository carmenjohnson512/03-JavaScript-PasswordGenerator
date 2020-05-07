// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphNumChar = "abcdegfhijklmnopqrstuvwxyz0123456789".split("");
console.log("alphNumChar is working!", alphNumChar)
let specChar = " \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~".split("");
console.log("specChar is working!!", specChar)


var keyInput = event.keyInput.tolowerCase();
if (alphNumChar.includes(keyInput)) {
  for (let i = 0; i < alphNumChar.length || i < specChar.split; i++) {
    elements[i].textContent == event.key;
  }
}



// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
