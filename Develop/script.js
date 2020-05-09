// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdegfhijklmnopqrstuvwxyz".split("");
// console.log("alphNumChar is working!", alphNumChar)
var numSpecChar = "0123456789\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~".split("");
// console.log("specChar is working!!", specChar)
var allChar = "abcdegfhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~".split("");
// console.log("allChar is working!", allChar)



var allChoicesArray = [];
var allCharArray = [];
var numSpecCharArray = [];
var upperCaseArray = [];

// This function selects the character types to include; can select 1 or 
//more, but if none, should return empty password field
//if generate button is pushed
function decideChoices () {
  
  var useUpperCaseChar = document.querySelector('#upperCaseChar:checked');
  // console.log("upperCaseChar is working!", useUpperCaseChar)
  if (useUpperCaseChar != null) {
    // console.log("use alpha!")
    allChoicesArray = upperCaseArray.concat(upperCase)
      // console.log("upperCaseArray is working!", upperCaseArray)
  }

  var useNumSpecChar = document.querySelector('#numSpecChar:checked')
  if (useNumSpecChar != null) {
    // console.log("use numSpecChar!", useNumSpecChar)
    numSpecCharArray = allChoicesArray.concat(numSpecChar)
    // console.log("numSpecCharArray is working!", numSpecCharArray)
  }

  var useLowerCaseChar = document.querySelector('#lowerCaseChar:checked');
  if (useLowerCaseChar != null) {
    // console.log("use alpha!")
    lowerCaseArray = allChoicesArray.concat(lowerCase)
    // console.log("lowerCaseArray is working!", lowerCaseArray)
  }

  var useAllChar = document.getElementsByClassName('upperCharChoice:checked' && 'numSpecCharChoice:checked' && 'lowerCharChoice:checked');
  // console.log("useAllChar is working!", useAllChar)
  if (useAllChar = true) {
    allCharArray = allChoicesArray.concat(allChar);
    // console.log("allCharArray is working!", allCharArray)
  }
}

// // Write password to the #password input
function writePassword() {
  // method to set slider value based on slider position
  var sliderValue = document.querySelector("#slider").value;
  console.log("sliderValue is working!", sliderValue)
  var passwordLength = document.querySelector("#password-length").value;
  console.log(passwordLength)
 
  var passwordLengthValue = [];
  // // function to set length based on slider position
  setPasswordLength = function() {
    if(sliderValue >=8) {
      passwordLengthValue += sliderValue;
    }
    else{
      passwordLength.value = ""
    }
  }
// setPasswordLength();
decideChoices();


  if (allChoicesArray.length > 0) {
    var password = "";
    for(var i = 0; i < parseInt(sliderValue); i++){
      
      var randomNum = Math.floor(Math.random() * parseInt(allChoicesArray.length));

      password += allChoicesArray[randomNum];
      // console.log(password)
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
