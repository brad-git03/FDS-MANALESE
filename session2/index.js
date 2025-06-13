// console.log('Hello, World!');

// JS Basic Functions

function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log('Hello, World! ' + i);
    }
}

// Call the function // Invoke the function
sayHello();

function completeName(){
    // Local Scoped -> fullname
    let fullname = "Juan";
    let lastName = "Perez";
    console.log(fullname);
}

// Call the function
completeName();
// console.log(fullname); -> error not defined

// Global and Local Variables

let age = 20;
{
    // Local scoped
    const pi = 3.14; // Global variable
    console.log(age); // Accessing the global variable
}

// Accessing the variable inside the curly braces
// console.log(pi); // This will throw an error because pi is not defined outside the block

let studentName = ("Mary Poppins")

function getName() {
    // Local scoped
    console.log(studentName + " age is " + age); // Accessing the global variable
}
getName();

// Function with alert
function showAlert() {
    alert("This is an alert message!");
}

let userInput = prompt("Please enter your name:");
function greetUser() {
    while (userInput === null || userInput.trim() === "") {
        userInput = prompt("Name cannot be empty. Please enter your name:");
    }
    if (userInput == "Brad") {
        alert("Hello, " + userInput + "!");
        console.log("Hello there, " + userInput + "!");
    } else {
        alert("Please input your name.");
    }
}
greetUser();
