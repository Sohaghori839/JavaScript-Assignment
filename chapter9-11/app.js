//===================  task 1 ==========================
// let city_name = prompt("Enter the city name");
// if (city_name === 'karachi') {
// document.write("welcome to the city of light")
// }
// else{
//     document.write("welcome to your " + city_name + " city");
// }

// ==================== task 2 =======================

// let gender = prompt("Enter your gender");
// if ( gender === "male" || gender === "Male" ) {
//     document.write("Good morning sir");
// }
// else if (gender === "female" || gender === "Female"){
//     document.write("Good morning ma'am");
// }
// else{
//     document.write("Plese enter your gender once again")
// }

// ================= task 3 =======================
// let road_signal = prompt("enter the road traffic signal");
// if (road_signal === "red" || road_signal === "Red") {
//     document.write("Must stop");
// }
// else if (road_signal === "yellow" || road_signal === "Yellow"){
//     document.write("Ready to move");
// }
// else if (road_signal === "green" || road_signal === "Green"){
//     document.write("Move now");
// }
// else{
//     document.write(road_signal + " : not a traffic signal color");
// }

// ===================== task 4 ==========================
// let car_Fuel = +prompt("Enter the remaining fuel");
// if (car_Fuel === 0.25) {
//     document.write("Please refill the fuel in your car");
// }else{
//     document.write("You dont need to refill the fuel now")
// }

// ======================= task 5 =============================
// var a =  4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if(true){
//     alert("True");
// }
// else if (false) {
//     alert("False");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// else if (c === 13) {
//     alert("condition 2 is true");
// }
// else if (++c < 14) {
//     alert("condition 3 is true");
// }
// else if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// else if(true){
//     alert("True");
// }
// else if (false) {
//     alert("False");
// }
// else if("car" < "cat"){
//     alert("car is smaller than cat");
// };

// ===========================  task 6 ================================
// let sub_name1 = prompt("Enter the first subject name");
// let sub_name2 = prompt("Enter the second subject name");
// let sub_name3 = prompt("Enter the third subject name");
// let total_subj = sub_name1+sub_name2+sub_name3;
// let sub_marks1 = +prompt("Enter the first subject marks");
// let sub_marks2 = +prompt("Enter the second subject marks");
// let sub_marks3 = +prompt("Enter the third subject marks");
// let total_marks = sub_marks1+sub_marks2+sub_marks3;
// let sub_percentage1 = sub_marks1 *100/100;
// let sub_percentage2 = sub_marks2 *100/100;
// let sub_percentage3 = sub_marks3 *100/100;
// let total_percetage = (total_marks*100)/300;

// if (total_marks >= 80) {
//     document.write("Total marks : 300 " + "<br>");
//     document.write("Marks obtain : " + total_marks + "<br>");
//     document.write("percentage : " + total_percetage + "<br>");
//     document.write("Grade A-One : " +"<br>");
//     document.write("Remarks : Excellent" +"<br>");
// }
// else if (total_marks >= 70){
//     document.write("Total marks : 300 " + "<br>");
//     document.write("Marks obtain : " + total_marks + "<br>");
//     document.write("percentage : " + total_percetage + "<br>");
//     document.write("Grade A : " +"<br>");
//     document.write("Remarks : Good" +"<br>");
// }
// else if (total_marks >= 60){
//     document.write("Total marks : 300 " + "<br>");
//     document.write("Marks obtain : " + total_marks + "<br>");
//     document.write("percentage : " + total_percetage + "<br>");
//     document.write("Grade B : " +"<br>");
//     document.write("Remarks : You need to improve" +"<br>");
// }
// else if (total_marks <= 60){
//     document.write("Total marks : 300 " + "<br>");
//     document.write("Marks obtain : " + total_marks + "<br>");
//     document.write("percentage : " + total_percetage + "<br>");
//     document.write("Grade Fail : " +"<br>");
//     document.write("Remarks : Sorry" +"<br>");
// }
// else{
//     document.write("Try again")
// }
// let sub_marks = prompt("Enter the three subject marks");
// let total_marks = +prompt("Enter the total marks of three subjects");
// let percentage = (sub_marks*100)/total_marks;
// document.write (percentage + "<br>");
// let grade;
// let remark;
// if (percentage >= 80 ) {
//     // document.write("Total marks : 300 " + "<br>");
//     grade = "A-one";
//     remark = "Excellet";
// }
// else if (percentage >= 70 ) {
    
//     grade = "A";
//     remark = "Good";
// }
// else if (percentage >= 60 ) {
   
//     grade = "B";
//     remark = "Need to more improvement";
// }
// else if (percentage <= 60 ) {
   
//     grade = "fail";
//     remark = "sorry";
// }
// document.write('Grade :'+grade+'<br>');
//  document.write('Remarks :' +remark +'<br>');
// ========================= task 7 ======================================
// let Guess_number = prompt("Enter the number btw 1 to 10");
// let num_check = Math.floor(Math.random()*10)+1
// if (num_check === Guess_number) {
//     document.write("Bigo correct");
// }
// else if (num_check === Guess_number + 1 || num_check === Guess_number-1){
//     document.write("Close enough to the correct answer");
// }
// else{
//     document.write("Try again");
// }

// ========================= task 8 ======================================

// let num = +prompt("enter the number");
// if (num % 3 === 0 ) {
//     document.write("your number divisiable by 3");
// }
// else{
//     document.write("not divisiable by 3")
// }

// ================================= task 9 ======================================
// let num = + prompt("Enter the number");
// if (num % 2 === 0) {
//     document.write(num + " :This is even number");
// }
// else if (num % 2 === 1) {
//     document.write(num + " : This is odd number");
// } 

// ==================================== task 10 ========================================
// let temp = +prompt("Enter the temprature")
// if (temp > 40) {
//     document.write("It is too hot outside.");
// }
// else if (temp > 30 ){
//     document.write("The Weather today is Normal.");
// }
// else if (temp > 20 ){
//     document.write("Today’s Weather is cool.");
// }
// else if (temp > 10 ){
//     document.write("OMG! Today's weather is so Cool.");
// }
// else{
//     document.write("Enter your temprature again")
// }