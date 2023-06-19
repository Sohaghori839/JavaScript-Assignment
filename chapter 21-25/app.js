// short cut of multi line comments 
// Alt+shift+A

// Task 1
/* let firstName = prompt("Enter the first name");
let secondName = prompt("Enter the second name");
let fullName = firstName + secondName ;
document.write(fullName) */

// Task 2
/* let userPhone = prompt("Enter your favourit phone model");
let phoneLength = userPhone.length;
document.write("My fav phonne is : " + userPhone + "<br>" + "The lenght of strig is : " + phoneLength); */

// Task 3
/* let word = "pakistani";
let searchWord =  "n";
let wordIndexFind =  word.indexOf(searchWord);
document.write ("The index of 'n' is : " + wordIndexFind); */

// Task 4 
/* let word = "Hello World";
lastIndexOfWord =  word.lastIndexOf("l");
document.write("Last index of l is: "+lastIndexOfWord); */

// Task 5
/* let charPossition = "Pakistani";
check_the_possition_of_string = charPossition.charAt(3);
document.write(check_the_possition_of_string);
 */

// Task 6
/* let firstName = prompt("Enter the first name");
secondName = prompt("Enter the second name");
fullName = firstName.concat( secondName);
document.write(fullName); */

// Task 7
/* let city_name = "Hyderabad";
new_city = city_name.replace('Hydera', 'Islama');
document.write(new_city); */

// Task 8 
/* let para = "Ali and Sami are best friends. They play cricket and football together";
for (let i = 0; i < para.length; i++) {
   if (para.slice(i, i+3)==="and") {
    para=para.slice(0,i) + "&" + para.slice(i+3)
   }
}
document.write(para) */

// Task 9
/* let num_str = "472";
document.write(typeof(num_str));
document.write("<br>")
let num = 472;
document.write(typeof(num)); */

// Task 10
/* let num = prompt("Enter your name");
num_change = num.toUpperCase()
document.write(num_change); */

// Task 11

// Task 12
/* let num = "35.36";
let num_change =num.toString().replace("."," ")
document.write(num_change); */

// Task 16
/* var university = "University of Karachi";
var universityArray = university.split(' ');

for (var i = 0; i < universityArray.length; i++) {
  document.write(universityArray[i] + "<br>");
}
 */

// Task 17
// ======================question 15==============
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// creating variables for ascii codes;
/* let ascii_of_0 = 49;
let ascii_of_small_a = 97
let ascii_of_capital_A = 65;

let pass = prompt("enter a password");


//checking length
let flag = false;
if(pass.length < 6){
    flag = true;
}

//checking numbers
let count = 0;

for(let i = 1; i<pass.length; i++){
    let pass_1 = pass.charCodeAt(i);
    for(let j = ascii_of_0 ; j < 58 ; j++){
        if(pass_1 === j){
            count += 1 ;
        }
    }
}


//checking small aphabets
let count_1 = 0;

for(let i = 0; i<pass.length; i++){
    let pass_1 = pass.charCodeAt(i);
    for(let j = ascii_of_small_a ; j < 123 ; j++){
        if(pass_1 === j){
            count_1 +=1 ;
        }
    }
   
}


//checking capital aphabets
let count_2 = 0;

for(let i = 0; i<pass.length; i++){
    let pass_1 = pass.charCodeAt(i);
    for(let j = ascii_of_capital_A ; j < 91 ; j++){
        if(pass_1 === j){
            count_2 +=1 ;
        }
    }
}

//checking index 0
let count_3 = 0;
let pass_1 = pass.charCodeAt(0);
for(let i = ascii_of_0; i<58; i++){
        if(pass_1 === i){
            count_3 +=1 ;
        }
}

if(flag === true && count === 0 ){
    prompt("your password' length is smaller than 6 \ndoes not contain number\nenter a new password")
 }

 else if(flag === true && count_1 === 0 ){
    prompt("your password' length is smaller than 6\ndoes not contain small alphabet\nenter a new password")
 }


 else if(flag === true && count_3>=1){
    prompt("your password' length is smaller than 6 \nfirst index is a number\nenter a new password")
    
}


else if(count === 0 && count_1 === 0 ){
    prompt("does not contain number \ndoes not contain small alphabet\nenter a new password")
 
 }
 



 else if(count === 0 &&  count_3>=1){
    prompt("does not contain number \nfirst index is number\nenter a new password")
 }
 

 else if( count_1 === 0 &&  count_3>=1){
    prompt("does not contain small alphabet \nfirst index is a number\nenter a new password")
 }
 

else if(flag === true){
    prompt("your password' length is smaller than 6\nenter a new password")
 }


 else if( count === 0 ){
    prompt("does ot contain numbers \nenter a new password")
 }


 else if( count_1 === 0){
    prompt("does not contain small alphabet\nenter a new password")
 }



 else if(count_3>=1){
    prompt("first index is a number\nenter a new password")
 } */

//  gpt

 /* const specialSymbols = ['@', '.', ',', '!'];
let username = prompt('Enter your username:');

while (containsSpecialSymbol(username)) {
  alert('Please enter a valid username without special symbols [@, ., ,, !].');
  username = prompt('Enter your username:');
}

alert('Username saved successfully!');
// Store the username in a variable or use it as needed
// For example:
// const storedUsername = username;

function containsSpecialSymbol(username) {
  for (let i = 0; i < specialSymbols.length; i++) {
    if (username.includes(specialSymbols[i])) {
      return true;
    }
  }
  return false;
}
 */

var userName=prompt("Enter your Your Name: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName without using this symbol[@ ! . ,]");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}
 