// ============================ chapter 2 ===============================
// task1
// var userName = "soha ghori";
// document.write(userName);

// task2
// var myName = "soha ghori";
// alert(myName);   
// document.write(myName); extra work
// document.getElementById("name").innerHTML =myName; extra

// task3
// var msg = "message";
// document.write(msg);

// var message ="Hello world";
// document.write(message);
// alert (message);

// task4
// var studentName = "Jhone";
// var studentAge = 17;
// var studentCertificate = "Cartificate mobile application development";

// alert(studentName);
// alert(studentAge);
// alert(studentCertificate);

// task5
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// task6
// var userName = "My email address is";
// var uerEmail = "example@example.com";
// var result = userName.concat(" ",uerEmail);
// alert(result);

// task7
// var calledBook ="I am trying to learn from the Book a smarter\nway to learn JavaScript";
// alert(calledBook);

// task8
// var content = "Yah! I can write HTML content through JavaScript";
// document.write(content);

// task9
// alert ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// document.write ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//============================ chatpter3 =====================
// task 1
// let userAge = +prompt("enter your age");
// document.write(userAge);

//task 1
// var age="20";
// alert("I am "+age+" years old");

// task 2
// let numberOfVisiter =  0;
// let a = 0;
// for (let a = 0; a <20; a++) {
//    numberOfVisiter = numberOfVisiter +1
//     alert("You have visited this "  + " " + numberOfVisiter + " times");

// task 3
// let birthYear = 2000;
// document.write("MY birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is number");

// task 4
// let visterName= prompt("enter the visitor's name here");
// let ProductTitle = prompt("enter the product title");
// let quantity = +prompt("enter the quantity of product you wents");
// document.write(visterName + " ordered " + quantity + ProductTitle + " on XYZ Clothing store");

//=========================== chatpter 4 =====================
// task 1
// let user_name12 = prompt("enter the user name");
// document.write (user_name12);
// or 
// var a,b,c ;

// task 2
// 5 legal variable
// var firstName, first_name, firstname , firstname12;
// illegal variable
// var first name, 99firstname; 

// task 3
// document.write("Rule for naming JS variables" +"<br>" +"<br>" +"<br>");
// document.write("Variable name can be contain, number, $ and _ For example: $my_1stVariable" + "<br>")
// document.write("Variablemust beign with a letter, $ or _ for example : $name, _name or name" + "<br>");
// document.write("Variable names are case sensitive" + "<br>");
// document.write("variable names should not be JS keywords" + "<br>");

// ========================= chapter 5 =====================
// task 1
// let number1= +prompt("enter the number 1") ;
// let number2= +prompt("enter the number 2") ;
// let sum = number1 + number2;
// document.write("sum of " + number1 + " and " + number2 + " is " + sum);

// task 2
// let number1= +prompt("enter the number 1") ;
// let number2= +prompt("enter the number 2") ;
// let sum = number1 - number2;
// let sum = number1 * number2;
// let sum = number1 / number2;
// let sum = number1 % number2;
// document.write("sub of " + number1 + " and " + number2 + " is " + sum);
// document.write("multiple of " + number1 + " and " + number2 + " is " + sum);
// document.write("divide of " + number1 + " and " + number2 + " is " + sum);
// document.write("modulus of " + number1 + " and " + number2 + " is " + sum);

// task 3
// let number1=10;
// let number2=3;
// let totalNum = number1+ number2;
// document.write("After addition is:" + " " + totalNum+ "<br>") ;
// let i = 0
// for (let i = 0; i < 5; i++) {
//     totalNum = totalNum +1;
//     document.write(totalNum);
// }

// task 4
// let cost_of_movie = 600;
// let costOfTicket5 = cost_of_movie *5;
// document.write("Total cost to buy 5 tickets to a movie is " + costOfTicket5 + " PKP");

// task 5
// document.write ("Table of 4" + "<br>" + "<br>");
// for (let t = 1; t <= 10; t++) {
//    document.write("4" + " x" + t + " = " + 4*t + "<br>");
// }

// task 6
// let c = 25;
// let converf = (c-32)*5/9;
// let f = 70;
// let convertc = (f*9/5)+32;
// document.write("25°C is " + converf + "<br>" + "25°f is " + convertc);

// task 7
// let price_off_items1 =+prompt("Enter the price of item 1");
// let price_off_items2 =+prompt("Enter the price of item 2");
// let quantity_of_itmes1 =+prompt("Please enter the quantity of items 1");
// let quantity_of_itmes2 =+prompt("Please enter the quantity of items 2");
// let shiping_charges = 100;
// let price_quatity1 = price_off_items1*quantity_of_itmes1;
// let price_quatity2 = price_off_items2*quantity_of_itmes2;
// let total_order=(price_quatity1+price_quatity2+shiping_charges);
// document.write("price of items 1 is " + price_off_items1 + "<br>");
// document.write("Quanntity of items 1 is " + quantity_of_itmes1 + "<br>");
// document.write("price of items 2 is " + price_off_items2 + "<br>");
// document.write("Quanntity of items 2 is " + quantity_of_itmes2 + "<br>");
// document.write("Shippig Charges" + shiping_charges+ "<br>");
// document.write(total_order)

// task 8
// let total_marks =980;
// let marks_obtained = 804;
// let total_percetage = 804*100/980;
// document.write("Total marks: " + total_marks +"<br>" + "Marks obtained: "+marks_obtained + "<br>" + "Percentage "+total_percetage);

// task 9
// let doller1 = 104.80;
// let Riyan1 = 28;
// let usDoller= doller1*10;
// let saudiaRiyan= Riyan1*25;
// let total_currency = usDoller+saudiaRiyan;
// document.write("Total Currency in PKP: " + total_currency);

// task 10
// let num = +prompt("enter the number");
// let numCal = (num+5)*10/2;
// document.write(numCal);

// task 11
// let curret_year = +prompt("enter the current year");
// let curret_birth = +prompt("enter the birth year");
// let ageResult = curret_year-curret_birth;
// document.write("current year: " + curret_year +"<br>" + "birth year: "+ curret_birth + "<br>" +"your age is: "+ ageResult);

// task 12
// document.write("The Geometrizer" + "<br>" + "<br>");
// let r = 20;
// let circumference = 2*3.142*20;
// let area_of_radius= 3.142*20*20;
// document.write("Radius of circle: "+ 20+ "<br>"+ "The circumference is: "+circumference +"<br>"+ "The area is: "+area_of_radius);

// task 13
// document.write("The lifetime supply calculator" + "<br>" + "<br>")
// let fav_snack= prompt("Enter your fav snack");
// let current_age = +prompt("enter your curret age");
// let max_age = 65;
// let estimated_amount_per_day = +prompt("enter the estimate amt per day");
// let result= current_age*estimated_amount_per_day;
// document.write("favourite snack: "+ fav_snack + "<br>"+ 
// "current age: "+ current_age + " <br>"+ "estimate maximum age: "+ max_age+"<br>"+"amount of snacks per day: " + estimated_amount_per_day + "<br>");
// document.write("you will need " +result+ fav_snack +" to last you untill the ripe old age of "+max_age);

// ============================= chapter 6,7,8,9 =============================
// task 1
// document.write("Result:" + "<br>");
// let a = +prompt("enter the num");
// document.write("The value of a is: " + a + "<br>" + "................" + "<br>" + "<br>");
// let b = a+1;
// let c = b+1;
// document.write("The value of ++a is: "+ b + "<br>" + "now the value of a is: " + b + "<br>" + "<br>");
// document.write("The value of a++ is: " + b+ "<br>" + "now the value of a is: " + c + "<br>" + "<br>");
// let d = c-1;
// let e = d-1;
// document.write("the value of --a is : " + d + "<br>"+ "Now the value of a is: " + d + "<br>"+  "<br>"+ "The value of a-- is: " + d + "<br>"+ "Now the value of a is: " + e );

// task 2
// let a =2;
// let b = 1;
// let r = --a- --b+ ++b + b--;
// document.write("a is "+ a + "<br>"+ "b is "+ b +"<br>"+ "result is " + r);

// task 3
// let a = "welcome ";
// let b = prompt("enter your name");
// let c = a+b;
// document.write(c + " to this website");

// task 4
let a = +prompt("enter the number");
for (let a = 1; a <= 10; a++) {
    document.write
    
}
