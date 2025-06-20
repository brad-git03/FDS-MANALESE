// JS Objects
// new -> to initialize and -> new instance/duplicate
// object() -> to recognize the variable as an object

let myComputer = new Object();
console.log("myComputer:", myComputer);

console.log(typeof myComputer);
let computer = {};
console.log("computer:", computer);
console.log(typeof computer);

/*
SYNTAX:

let objectName = {
    keyA: valueA,
    keyB: valueB
}


*/

let myCellphone = {
    name: "Nokia 3210",
    manufactureDate: 1999
}

console.log("myCellphone:", myCellphone);
console.log("myCellphone name:", myCellphone.name);
console.log("myCellphone manufactureDate:", myCellphone.manufactureDate);

// Comparison between array and object
let myArray = ["Nokia 3210", 1999];
console.log("myArray:", myArray);
let myObject = {
    name: "Nokia 3210",
    manufactureDate: 1999
}
console.log("myObject:", myObject);
console.log("myObject.name:", myObject.name);

// Function object constructor
function Laptop(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Instance Creation using new keyword
let myLaptop = new Laptop("Apple", "MacBook Pro", 2020);
console.log("myLaptop:", myLaptop);
let myLaptop2 = new Laptop("Dell", "XPS 13", 2021);
console.log("myLaptop2:", myLaptop2);

// Accessing object properties
console.log("Laptop brand:", myLaptop.brand);

let arrayOfLaptops = [myLaptop, myLaptop2]
console.log("arrayOfLaptops:", arrayOfLaptops[1].brand);

// Initializing an object with properties
let car = {};

car.name = "Toyota Corolla";
car.year = 2021;

console.log("Car name:", car.name);

// Objects with methods/functions
let student = {
    name: "Juan Cruz",
    talk: function() {
        console.log("Hello, my name is " + this.name);
    },
}
student.talk();

student.walk = function() {
    console.log(this.name + " I am walking");
}
student.walk();

// Much descriptive object
let person = {
    firstName: "Joey",
    lastName: "Doe",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    },
    emails: ["joey@ua.edu.ph","joey@gmail.com"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    greet: function() {
        console.log("Hello, my name is " + this.fullName());
    }
};
person.greet();
console.log("my city:", person.address.city);
console.log("my emails:", person.emails[1]);


