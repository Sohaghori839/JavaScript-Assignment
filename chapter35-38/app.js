// Task 1
/* function telldate() {
    let date =  new Date();
    document.write(date)
}
telldate(); */


// Task 2
/* function greeting(firstName, lastName) {
    document.write(firstName + lastName);
}
greeting("soha", "s") */

// Task 3
/* function sum(num1, num2) {
   let num = num1 + num2;
}
document.write(10 + 6) 
*/

// Task 4 
/* function computer_operate(num1, num2, operator) {
    if (operator === "+") {
        document.write(num1 + num2);
    }
    else if(operator === "-"){
        document.write(num1 - num2);
    }
    else if(operator === "*"){
        document.write(num1 * num2);
    }
    else if(operator === "/"){
        document.write(num1 / num2);
    }
    else{
        document.write("enter the correct operator");
    }
   
}
computer_operate(5 ,10, "%"); */

// Task 5 find the power
/* function power(num ,num1 , operator) {
   if (operator === "**") {
       document.write(num ** num1)
   } else {
       document.write("enter the correct power")
   }
}
power(5 ,5 ,"**"); */

// Task 5 find the square 
/* function squareNumber(number) {
   var result = number * number;
   document.write(result)
}
squareNumber(5) 
*/

// Task 6 find the factorial // 1*2*3*4*5... 
/* let number = prompt("Enter the number");
let fact = 1;
if (number == 0) {
    document.write(`the factorial of ${number} is 1 `);
}
else if (number < 0) {
    document.write(`the factorial of -ve numbers is not possible `)
}
else {
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    document.write(`The factorial of ${number} is ${fact}`);
} */

// Task 7
/* function counting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>")
    }
}
counting(1,10);
*/

// Task 8
/* function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(side) {
    return side * side;
  }

  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);

  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse;
}
var baseLength = 3;
var perpendicularLength = 4;

var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
document.write("Hypotenuse: " + hypotenuse)
 */

// Task 9
/* function areaOfrectangle(width, height) {
    let A= width*height;
    return A;
}
// let width= +prompt("Enter the width of rectangle");
// let height = +prompt("enter the height of rectangle");
let Area = areaOfrectangle(4,5);
document.write(Area);
 */

// Task 10
// program to check if the string is palindrome or not

/* function checkPalindrome(string) {
 const len = string.length;
    for (let i = 0; i < len / 2; i++) {
         if (string[i] !== string[len - 1 - i]) {
            return 'it is not a palindrome';
        }
    }
    return 'it is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
document.write(`${string} ${value}`);
 */

// Task 11
/* function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox")); */

// Task 12

/* function findLongestWord(str) {
    var words = str.split(' '); 
    var longestWord = '';
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  var inputString = 'Web Development Tutorial';
  var longestWord = findLongestWord(inputString);
  console.log("Longest word: " + longestWord);
   */

