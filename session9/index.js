// ES6 updates

// Exponent Operator

let number = Math.pow(2, 3);
console.log(number); // 8

// Concatenation vs String Literals
// Concatenation -> Double Quote and Plus Sign

let name = "John";
console.log("Hello my name is " + name); // Hello my name is John

// ${} and backticks (`)
console.log(`Hello my name is ${name}`); // Hello my name is John

let num1 = 5;
let num2 = 10;
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`); // The sum of 5 and 10 is 15

// Arrow Functions
const sum = (a, b) => a + b;

console.log(sum(5, 10)); // 15

const hello = () => {
    console.log("Hello World");
}

hello(); // Hello World
