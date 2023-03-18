//// Q-2 (Read a number (using prompt) and display it using alert)

let int = parseInt(prompt("Type a number!"));

if (isNaN(int)) {
  alert("Please, insert number...");
} else {
  alert("Your number = " + int);
}