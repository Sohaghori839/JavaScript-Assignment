// Task1
/* function power(a, b) {
    let a = +prompt("Enter Number: ");
    let b = +prompt("Enter Power: ");
    let res = Math.pow(a, b);
    alert(`Value of ${a} raised to ${b} is: ${res}`);

}
power(); */

//  Task 2
/* function leapYear() {
    var year = +prompt("Enter Any Year");
    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        alert(year + " is a leap year!");
    }
    else {
        alert(year + " is not a leap year!");
    }
}
leapYear(); */

// Task 3
/* let a= +prompt("First side of triangle : ");
let b= +prompt("Second side of triangle : ");
let c= +prompt("Third side of triangle : ");
function areaofTraingle() {
    function perimeter() {
        let S = (a+b+c)/2
        return S;
    }
    let S = perimeter();
    let area = S*(S-a)*(S-b)*(S-c);
    alert("The area of triangle is : " +area);
}
areaofTraingle(); */

// Task 4
/* let s1 = +prompt("Enter the first subject marks: ");
let s2 = +prompt("Enter the second subject marks: ");
let s3 = +prompt("Enter the third subject marks: ");
let avg;
let per;
function average() {
    let avg = (s1 + s2 + s3) / 3;
    return avg;
}

function percentage() {
    let per =(avg / 300) * 100;

    return per;
}

function mainFunction() {
    avg = average();
    per = percentage()
    document.write("The marks of 1st subject is " + s1 + " <br> ");
    document.write("The marks of second subject is " + s2 + " <br> ");
    document.write("The marks of third subject is " + s3 + " <br> ");
    document.write("The average of the student marks is  " + avg + " <br> ");
    document.write("The percentage of student is " + per + " <br> ");
}
mainFunction(); */

// task 5
/* function checkindex(charr,string){
       for(var i=0; i<string.length; i++){
         if(string[i] == charr){
         alert("Found at index of : "+i);
         break;
    }
      }
    }
    var str = "Soha";
    checkindex("o",str) */

// Task 6
/*  function removeVowels(){
   var str = prompt("Enter Some Sentence");
   var n = str.length;
   if (n <= 25) {
   var str1 = str.replace(/[aeiou]/gi, '');
   alert(str1);
 }else{
  alert("Your Sentence Is More Than 25 Characters Long");
}
 console.log(n)
 }

 removeVowels(); */

//Task # 7

// function isVowel(){
//   var str = prompt("Enter Sentence");
//   var found = 0;
//   var count = 0;
//   document.writeln("Vowels in successions are : <br> ");
//}

// function isVowel(str)
// {
//     switch (str)
//     {
//         case 'A':
//         case 'a':
//         case 'E':
//         case 'e':
//         case 'I':
//         case 'i':
//         case 'O':
//         case 'o':
//         case 'U':
//         case 'u':
//             return 1;
//         default:
//             return 0;
//     }
// }

// function vowels(){
//     var str = "Pleases read this application and give me gratuity";
//     var found = 0, 
//     var count = 0;
//     isVowel();

//     document.write("Vowels in successions are : \n");

//     for (var i = 0; str[i] != \0 ; i++)
//     {
//         if (isVowel(str[i]))
//         {
//             found++;
//         }
//         else
//         {
//             found = 0;
//         }

//         if (found == 2)
//         {
//             document.write(" \n ", str[i - 1], str[i]);
//             found = 1;
//             count++;
//         }
//     }

//     document.write("\nTotal number of occurences : ", count++);

//     return 0;
// }

// vowels();

//Task # 8
/* var dist = +prompt("Enter the distance between two cities (in km.)");
function meters() {
    var metersres = dist * 1000;
    return metersres;
}
function feet() {
    var feetres = dist * 3280.84;
    return feetres;
}
function inches() {
    var inchesres = dist * 39370.1;
    return inchesres;
}
function centimeters() {
    var centimetersres = dist * 100000;
    return centimetersres;
}
function distance() {
    var m = meters();
    var ft = feet();
    var i = inches();
    var cm = centimeters();
    document.write("The distance between two cities (in km.) is : " + dist + " <br> ");
    document.write("The distance between two cities in feet is : " + ft + " <br> ");
    document.write("The distance between two cities in inches is : " + i + " <br> ");
    document.write("The distance between two cities in centimeters is : " + cm + " <br> ");
}
distance(); */

//Task # 9

/* function overtimePay(){
   var count = 1; 
   var working_Hours = prompt("Enter the working hours of employee");
   var over_time_Pay;
   var over_time;
   if(working_Hours>40)
         {
             over_time = working_Hours - 40;
             over_time_Pay = over_time * 12.00;
            alert("Employee overtime pay is "+over_time_Pay);
        }
        else
             alert("You have to work for more than 40 hours to get over time pay");
 }

overtimePay();
 */

//Task # 10

 /* function withDraw(){
   var amount = +prompt("Please input amount for withdraw : ");
   var hundreds = parseInt(amount / 100);
   var fifty = parseInt((amount % 100) / 50);
   var ten = parseInt(((amount % 100) % 50) / 10);
   var remaining = parseInt(((amount % 100) % 50) % 10);   alert("You will have " +hundreds+ " hundreds notes " +fifty+ " fifty notes " +ten+ " ten notes \n Amount still remaining Rs. :  " +remaining);
   return 0;
 }
 withDraw();
 */

