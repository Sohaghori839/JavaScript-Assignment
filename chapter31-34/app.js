// Task 1
/* let current_date = new Date();
document.write(current_date) */

// Task 2
/* let month = ["january","Febuary","March","April","May","June","July","Augest","September","October","November","December"];
let d = new Date();
let current_month = d.getMonth();
let month_get = month[current_month]
alert("current month: "+ month_get)
 */

// Task 3
/* let day = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
let d = new Date();
let current_day = d.getDay();
let today_date =day[current_day];
alert("Today day is: "+ today_date) */

// Task 4
/* let date =  new Date();
let day = date.getDay();
let days = ["Monday","Tuesday","Wedesday","Thursday","Friday","Saturday","Sunday"];
if (days === "Saturday" || days === "Sunday") {
    document.write("Today is fun day")
}
else{
    document.write("Today not fun day")
} */

// Task 5
/* let date =  new Date();
let day = date.getDay();
if (day<16) {
    document.write("First fifteen days of the month");
}
else{
    ocument.write("Last days of the monnth");
} */

// Task 6
/* let date =  new Date();
let millsec = date.getTime()
document.write("Current date: "+ date + "<br>" + "ELasped milliseconds since January 1,1970: "+ millsec + "</br>");
document.write("ELasped mints since January 1,1970: " + (millsec/60));
*/

// Task 7
/* let date = new Date();
let hour = date.getHours();
if (hour < 12) {
    alert("It's AM")
}
else{
    alert("It's PM")
}
 */

// Task 8
/* let date = new Date();
let laterdate = new Date('9 nov 2025');
document.write(laterdate); */

// Task 9
/* var startRamadan = new Date("May 18, 2025");
var currentDate = new Date();
var timeDiff = Math.abs(currentDate.getTime() - startRamadan.getTime());
var daysPassed = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

alert("Number of days passed since 1st Ramadan: " + daysPassed);
 */

// Task  11
/* let date =  new Date();
let hour =  date.getHours();
date.setHours(hour+1);
document.write("Current date: "+ Date() + " <br>")
document.write("Date after 1 hour: "+ date) */

// Task  12
/* var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
var formattedDate = currentDate.toDateString();
alert("100 years back from today is: " + formattedDate);
 */

// Task 13
/* let userAge =  +prompt("Enter your age");
let date = new Date();
date.setFullYear(date.getFullYear()-userAge);
document.write("your age is: " + userAge + " <br>");
let formattedDate = date.toDateString();
document.write("Your birth year is: "  + formattedDate ) */

// Task 14

/* let customerName =  prompt("Enter your name");
let date = new Date();
let month =  date.getMonth();
let unit =  410;
let perunit = 16;
let netAmount =  unit*perunit;
let lateCharges =  350;
let grossAmt = netAmount+lateCharges;
document.write("Customer name: "+ customerName + "<br>"+ "Month: " + month + "<br>" + "Number of units: " + unit + "<br>"+ "Charges of per unit: "+ perunit
+ "<br>" + "Net Amount Payable (within Due Date): " + netAmount + "Late payment surcharge: "+ lateCharges + 
"Gross Amount Payable (after Due Date): "+ grossAmt); */