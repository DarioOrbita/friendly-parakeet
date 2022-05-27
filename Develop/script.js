// Assignment code here

//sets arrays for each 
const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const charArray = ['!','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
const upperLetterArray = letterArray.map(element => {
    return element.toUpperCase();
});



let passwordInfo = {
  
  lowercase: false,
  uppercase: false,
  numbers: false,
  specialChars: false,
  
}





function generatePassword() {
    
  
  //prompts the user to enter a password length
  let passwordSize = parseInt(window.prompt('Enter a password length. Must be at least 8 characters, and no more than 128 characters.'));
  let addRandomArray = [];
  let randomPass = [];
    
    if (passwordSize >= 8 && passwordSize <= 128) { 


    //placeholder arrays for selected characters and random password
    
    //prompts user for each type of character included and updates the associated passwordInfo object
    if (window.confirm('Include lowercase letters?')) {
    
      passwordInfo.lowercase = true;
      addRandomArray = addRandomArray.concat(letterArray);
    
    }
    
    if (window.confirm('Include uppercase letters?')) {
    
      passwordInfo.uppercase = true;
      addRandomArray = addRandomArray.concat(upperLetterArray);
    
    }
    
    if (window.confirm('Include numbers?')) {
    
      passwordInfo.numbers = true;
      addRandomArray = addRandomArray.concat(numArray);
    
    }
    
    if (window.confirm('Include special characters?')) {
    
      passwordInfo.specialChars = true;
      addRandomArray = addRandomArray.concat(charArray);
    
    } 

    if (!passwordInfo.lowercase && !passwordInfo.uppercase && !passwordInfo.numbers && !passwordInfo.specialChars) {

      window.alert("Please select at least one character option.");
      generatePassword();

    }
    debugger;
    for (i = 0; i < passwordSize; i++) {

      randomPass[i] = addRandomArray[Math.floor(Math.random() * addRandomArray.length)];
      
    }
  

    
  } else {
    
    window.alert("Please choose a value between 8 and 128.");
    generatePassword();
  }
 
  return randomPass;
  
  }











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
