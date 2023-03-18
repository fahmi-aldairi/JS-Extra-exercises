//// Q-3 (Read in two numbers and display them in ascending order.)

let int1 = parseInt(prompt("Type a number!"));
let int2 = parseInt( prompt("Type another number!"));

let int = [int1,int2];

if (isNaN(int1) || isNaN(int2)) {
  alert("Please, insert numbers...");
} else if (int1 === int2){
  alert("You insert equal numbers")
}
else {
  alert("Your Order : "  + int.sort());
}