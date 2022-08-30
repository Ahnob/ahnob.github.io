function sum(a, b) {
  console.log(a);
  console.log(a + b);
  return a + b;
}

sum(1, 4);

function nextDecade(year) {
  return year + 10;
}

nextDecade(2020);
console.log(2020 + 10);

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
add(3, 4);
console.log(6 + 4);

const language = "JavaScript";

language[0]; //first character
language[1]; //second character
language[2]; //third character
console.log(language[2]);

// how to get a particular letter from a string
const gage = "JavaScript";

console.log(gage[gage.length - 2]); // "p" because it's the second to last character from "JavaScript"

//do this if you want to get the index
const Anob = `developer`;
console.log(Anob.length - 2);
