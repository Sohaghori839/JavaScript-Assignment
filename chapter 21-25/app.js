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

// Task 5
/* let firstName = prompt("Enter the first name");
secondName = prompt("Enter the second name");
fullName = firstName.concat( secondName);
document.write(fullName); */

// Task 6
/* let city_name = "Hyderabad";
new_city = city_name.replace('Hydera', 'Islama');
document.write(new_city); */

// Task 7 
let para = "Ali and Sami are best friends. They play cricket and football together";
for (let i = 0; i < para.length; i++) {
   if (para.slice(i, i+3)==="and") {
    para=para.slice(0,i) + "&" + para.slice(i+3)
   }
}
document.write(para)

