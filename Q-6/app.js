///// Q-6
// If you have a “num” variable,  Your task is to print:

// - ONE, if it is equal to 1 .
// - TWO, if it is equal to 2.
// - THREE, if it is equal to 3 .
// - FOUR, if it is equal to 4.
// - FIVE, if it is equal to 5.
// - SIX, if it is equal to 6 .
// - SEVEN, if it is equal to 7.
// - EIGHT, if it is equal to 8.
// - NINE, if it is equal to 9.
// - PLEASE TRY AGAIN, if there is none of the above.


let num = parseInt(prompt("Insert number"));

if (isNaN(num)) {
  alert("Please, insert number...");
} else if ((num === 1)) {
  alert("ONE");
} else if ((num === 2)) {
  alert("TWO");
} else if ((num === 3)) {
  alert("THREE");
} else if ((num === 4)) {
  alert("FOUR");
} else if ((num === 5)) {
  alert("FIVE");
} else if ((num === 6)) {
  alert("SIX");
} else if ((num === 7)) {
  alert("SEVEN");
} else if ((num === 8)) {
  alert("EIGHT");
} else if ((num === 9)) {
  alert("NINE");
} else {
  alert("PLEASE TRY AGAIN");
}
