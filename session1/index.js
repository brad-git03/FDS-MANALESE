// INTRO TO JAVASCRIPT
/*
Brendan Eich (Netscape)
JavaScript was created in 1995 by Brendan Eich while working at Netscape. It was initially called Mocha, then renamed to LiveScript, and finally to JavaScript. The name change was part of a marketing strategy to capitalize on the popularity of Java at the time, even though the two languages are quite different.
Old names of JS: Mocha, LiveScript, JavaScript
Browser Name: NetScape Navigator
*/

// JS BASICS

console.log("Hello, World!"); // Output: Hello, World!

// JS VARIABLES and DATA TYPES
let age = 20;

console.log(age); // Output: 20

// STRING
let name = "John Doe";
console.log(name); // Output: John Doe  

// typeof -> to check the data type of a value
console.log(typeof age); // Output: number
console.log(typeof name); // Output: string

let temp = 38.5;
console.log(temp); // Output: number
console.log(typeof temp); // Output: number

// boolean
let isOverloaded = true;
console.log(isOverloaded); // Output: true
console.log(typeof isOverloaded); // Output: boolean

// Array
let students = ["Jane", "John", "Joey"];
console.log(students); // Output: [ 'Jane', 'John', 'Joey' ]
console.log(typeof students); // Output: object (arrays are objects in JS)

// Objects
// key-pair structure
let person ={
    name: "John Doe",
    age: 19,
    email: ["jdoe@mail.com", "john@fb.com"]
}

console.log(person); // Output: { name: 'John Doe', age: 19, email: [ '

console.log("Hello World!")

// Alerts

alert("Hello, Admin"); // Displays an alert box with the message "Hello, World!"

// Initialization and Variables with no data
// let vs const
let num1 = 10; // Variable declaration without initialization
console.log(num1); // Output: undefined (x is declared but not initialized)    // const y; // This will throw an error because const variables must be initialized at the time of declaration

// uninitialized
let num2;
console.log(num2); // Output: undefined (num2 is declared but not initialized)

num1 = 500;
console.log(num1); // Output: 500 (num1 is now initialized with a value)

num2 = 1000;
console.log(num2); // Output: 1000 (num2 is now initialized with a value)

//const -> constant variable
const height = 130;
console.log(height); // Output: 130 (height is a constant variable)

// with let variables, data can be updated

// height = 150;
// console.log(height); // Output: 150 (height is now updated)

const hoursInADay = 24;
const pie = 3.14;
const numbOfMonths = 12;

// JS Arithmetic Operators
let x = 10;
let y = 5;
let sum = x + y; // Addition
let difference = x - y; // Subtraction
let product = x * y; // Multiplication
let quotient = x / y; // Division
let remainder = x % y; // Modulus (remainder of division)
console.log("Sum:", sum); // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 5
console.log("Product:", product); // Output: Product: 50
console.log("Quotient:", quotient); // Output: Quotient: 2
console.log("Remainder:", remainder); // Output: Remainder: 0

// comparison operators
let a = 10;
let b = 20;
let isEqual = a === b; // Strict equality (checks value and type)
let isNotEqual = a !== b; // Strict inequality (checks value and type)
let isGreater = a > b; // Greater than
let isLess = a < b; // Less than
let isGreaterOrEqual = a >= b; // Greater than or equal to
let isLessOrEqual = a <= b; // Less than or equal to
console.log("Is Equal:", isEqual); // Output: Is Equal: false
console.log("Is Not Equal:", isNotEqual); // Output: Is Not Equal: true
console.log("Is Greater:", isGreater); // Output: Is Greater: false
console.log("Is Less:", isLess); // Output: Is Less: true
console.log("Is Greater or Equal:", isGreaterOrEqual); // Output: Is Greater or Equal: false
console.log("Is Less or Equal:", isLessOrEqual); // Output: Is Less or Equal: true

// Logical Operators
// Logical AND (&&), Logical OR (||), Logical NOT (!)
let isMarried = true;
let isLegalAge = false;
let canVote = isMarried && isLegalAge; // Both conditions must be true
console.log("Can Vote (AND):", canVote); // Output: Can Vote (AND): false

console.log("Can Vote (OR):", isMarried || isLegalAge); // Output: Can Vote (OR): true

// Equality Operators
let sample1 = 10;
let sample2 = "10";
let sample3 = "John";

// ==
console.log(sample1 == sample2); // Output: true (loose equality, type coercion occurs)
console.log(sample1 == "John"); // Output: false (different types)

// !=
console.log(sample1 != sample2); // Output: false (loose inequality, type coercion occurs)
console.log(sample1 != sample3); // Output: true (different types)

// Strict Equality Operators
console.log(sample1 === sample2); // Output: false (strict equality, no type coercion)

// strict inequality
console.log(sample1 !== sample2); // Output: true (strict inequality, no type coercion)

// User input
let userName = prompt("Enter your name:"); // Displays a prompt dialog box asking for the user's name
console.log("User Name:", userName); // Output: User Name: (user's input)

// Dynamic Sum Operation
let input1 = Number(prompt("Enter first number:")); // Prompt for first number
let input2 = Number(prompt("Enter second number:")); // Prompt for second number
let sumInputs = input1 + input2; // Convert inputs to numbers and calculate the sum
console.log("Sum of Inputs:", sumInputs); // Output: Sum of Inputs: (sum of the two inputs)

// CONCANTENATION
let concat1 = "Jane";
let concat2 = "Doe";

console.log(concat1 + " is " + concat2); // Output: Jane is Doe