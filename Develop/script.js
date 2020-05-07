// Assignment Code
let generateBtn = document.querySelector("#generate");
let alphNumChar = "abcdegfhijklmnopqrstuvwxyz0123456789".split("");
console.log("alphNumChar is working!", alphNumChar)
let specChar = " \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~".split("");
// console.log("specChar is working!!", specChar)
let alphNumCharUpper = function () {alphNumChar.toUpperCase()};

let alphNumCharLower = function () {alphNumChar.toLowerCase()};
 //console.log(alphNumCharLower)
let alphNumCharChkBx = document.querySelector("#alphNumChar");
// console.log("AlphNum chk box slector is working!", alphNumCharChkBx)
let specCharChkBx = document.querySelector("#specChar");
// console.log("SpecChar chk box slector is working!", specCharChkBx)
let alphNumCharUpperChkBx = document.querySelector("#alphNumCharUpper");
// console.log("Alph Num Upper is working!", alphNumCharUpperChkBx)
let alphNumCharLowerChkBx = document.querySelector("#alphNumCharLower");
// console.log("Alph Num Lower is working!", alphNumCharLowerChkBx)



// if('checkbox for upper is true') {
//   allChoicesArray.push(allUppers)
// }


// declare function to select Alpha Numeric Character checkbox option
// function includeAlphNumChar() {
  
// }

// // declare function to select Special Character checkbox option
// function includeSpecChar() {

// }

// // declare function to select Uppercase option
// function includeUpperCase() {

// }

// // declare function to select Lowercase option
// function includeLowerCase() {

// }

var allChoicesArray = []

function decideChoices () {
  var useAlpha = document.querySelector('#alphNumChar:checked')
  if (useAlpha != null) {
    console.log("use alpha!")
    allChoicesArray = allChoicesArray.concat(alphNumChar)
  }
}

// // Write password to the #password input
function writePassword() {
  
  let sliderValue = document.querySelector("#slider").value;
  console.log('clicking!!', parseInt(sliderValue))

  // console.log('checkbox checkd ???', document.querySelector('#alphNumCharLower:checked').value
decideChoices();


  if (allChoicesArray.length > 0) {
    console.log('allChoicesArray', allChoicesArray)
    var password = ''
    for(var i =0; i<parseInt(sliderValue); i++){
      //console.log('looping ?')
      
      var randomNum = Math.floor(Math.random() * 36)
      //console.log('random num ??', randomNum)
      password += allChoicesArray[randomNum]
    }

    console.log('passowrd filled up ??', password)
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
