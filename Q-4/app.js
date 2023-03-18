//// Q-4 (Read in two numbers and display the larger)


///Sol-1

// let int1 = parseInt(prompt("Type a number!"));
// let int2 = parseInt(prompt("Type another number!"));

// if (isNaN(int1) || isNaN(int2)) {
//   alert("Please, insert numbers...");
// } else {
//   alert("Your Max Number :"  + Math.max(int1 , int2));
// }

/////Sol-2

let num1 = parseInt(prompt("Insert First number"));
let num2 = parseInt(prompt("Insert second number"));

if (num1 > num2) {
  alert("The largest number is " + num1);
} else if (num1 < num2) {
  alert("The largest number is " + num2);
} else if (num1 === num2) {
  alert(num1 + " is equal " + num2);
} else{
  alert("Please insert a number....")
}