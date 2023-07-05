let num = +prompt("Enter the possitive integer");
let roundNum= Math.round(num);
let floorNum =  Math.floor(num);
let ceilNum =  Math.ceil(num);
document.write("number: " + num + "<br>"+ "round off value: "+ roundNum + "<br>" + "Floor value: " + floorNum  + "<br>"+ "Ceil value: "+ ceilNum);