let num1 = +prompt("enter the first number");
let num2 = +prompt("enter the second number");
if (num1 == num2) {
    document.write(num1 + " and "+ num2 + " : is equal" );
}

else if (num1 >= num2) {
    document.write(num1 + " : is greater then " + num2 );
}
else if(num1 <= num2){
    document.write(num1 + " : is smaller then "+ num2 );
}
else{
    document.write("Enter the correct input " );
}
