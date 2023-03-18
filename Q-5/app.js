//// Q-5 (Read two numbers and display their sum.  What problem did you encounter?)

let num1 = parseInt(prompt("Insert First number"));
let num2 = parseInt(prompt("Insert second number"));

if (isNaN(num1) || isNaN(num2)){
  alert("Please, insert numbers...");
} else{
  alert("Your sum = " + (num1+num2))
}