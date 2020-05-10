// Assignment Code
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowerCase = "abcdegfhijklmnopqrstuvwxyz".split("");
var lowerCase = "abcdegfhijklmnopqrstuvwxy";
// console.log("alphNumChar is working!", alphNumChar)
// var numSpecChar = "0123456789\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~".split("");
var numSpecChar = "0123456789\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~";
// console.log("specChar is working!!", specChar)
// var allChar = "abcdegfhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\^\_\`\{\|\}\~".split("");
// console.log("allChar is working!", allChar)



var allChoicesString = "";
var allCharArray = [];
var numSpecCharArray = [];
var upperCaseArray = [];
var lowerCaseArray = [];

// This function selects the character types to include; can select 1 or 
//more, but if none, should return empty password field
//if generate button is pushed
function decideChoices () {
  
  var useUpperCaseChar = document.querySelector('#upperCaseChar:checked');
  // console.log("upperCaseChar is working!", useUpperCaseChar)
  if (useUpperCaseChar != null) {
    // console.log("use alpha!")
    // allChoicesArray = upperCaseArray.concat(upperCase);
    allChoicesString += allChoicesString.concat(upperCase);
    // console.log(allChoicesString)

      // console.log("upperCaseArray is working!", upperCaseArray)
  } 

  var useNumSpecChar = document.querySelector('#numSpecChar:checked')
  if (useNumSpecChar != null) {
    // console.log("use numSpecChar!", useNumSpecChar)
    // allChoicesArray = numSpecCharArray.concat(numSpecChar);
    allChoicesString += allChoicesString.concat(numSpecChar);
    // console.log("numSpecCharArray is working!", numSpecCharArray)
  }

  var useLowerCaseChar = document.querySelector('#lowerCaseChar:checked');
  if (useLowerCaseChar != null) {
    // console.log("use alpha!")
    // allChoicesArray = lowerCaseArray.concat(lowerCase);
    allChoicesString += allChoicesString.concat(lowerCase);
    // console.log("lowerCaseArray is working!", lowerCaseArray)
  }

  // var useAllChar = document.getElementsByClassName('upperCharChoice:checked', 'numSpecCharChoice:checked', 'lowerCharChoice:checked');
  // // console.log("useAllChar is working!", useAllChar)
  // if (useAllChar != null) {
  //   allChoicesArray = allCharArray.concat(allChar);
  //   // console.log("allCharArray is working!", allCharArray)
  // }
}

// // Write password to the #password input
function writePassword() {
  // method to set slider value based on slider position
  var slider = document.querySelector("#slider").value;
  // // console.log("sliderValue is working!", sliderValue)
  // var passwordLength = document.querySelector("#password-length").value;
  // // console.log("password Length is returning null value!", passwordLength)
  // var passwordLengthValue = 68;
  // // function to set length based on slider position
  
  var sliderElement = document.getElementById("slider");
  var output = document.getElementById("password-length");
  output.innerHTML = sliderElement.value; // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  sliderElement.oninput = function() {
    output.innerHTML = parseInt(this.value);
  }
  
  // slider.oninput();
  
  decideChoices();

  var allChoicesArray = allChoicesString.split("");
  // console.log("allChoicesString working?", allChoicesArray)
  if (allChoicesArray.length > 0) {
    var password = "";
    for(var i = 0; i < parseInt(slider); i++){
      console.log("I'm in the for loop baby!", slider)
      var randomNum = Math.floor(Math.random() * parseInt(allChoicesArray.length));
      // console.log("password before", password);
      password += allChoicesArray[randomNum];
      // console.log("password after", password);
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log("password generating?", writePassword)
var passwordTextReset = document.querySelector("#password");
// var checkboxChoice = document.getElementsByClassName('charChoice');
// console.log("checbox choice array?", checkboxChoice)
resetBtn.addEventListener("click", function(event) {
  event.preventDefault();
  passwordTextReset.value = "";

function uncheckAll2() {
  location.reload();
  //   var checkboxChoice = document.getElementsByClassName('charChoice');
  // for(var i = 0; i < checkboxChoice.length; i++) {
  //   checkboxChoice[i].checked = false;
  // }
  }

uncheckAll2();

// function resetCharArrayInput() {
//   // var allChoicesArray = allChoicesString.split("");
//   // for(var i = 0; i < allChoicesString.length; i++) {
//     localStorage.clear();
//     // console.log("is allChoicesArray resetting?", allChoicesArray)
//     }
  
// resetCharArrayInput();
});

  // window.onload = function() {
  //   window.addEventListener('load', unchcheckAll2(), false);
  // }


// checkboxChoice.onload = function() {
//   resetBtn.addEventListener('click', checkboxChoice, false);
// }

// checkboxChoice.forEach(function(charChoice) {
//   charChoice.checked = false;





// function clearForm () {
//   passwordTextReset.value = "";
//   checkboxChoice.forEach(function(charChoice) {
//   charChoice.value = null;
// resetBtn.addEventListener("click", clearForm);
//   })



  //reset checkbox selection to blank without refresh

  // clear form text input without refresh

  // clear last checkbox variable selection from memory without refresh



