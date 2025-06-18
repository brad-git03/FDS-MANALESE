// console.log("Hello, my world!");

// Array Traversal

// convert to Array
let studentNumbers = ["UA-001", "UA-002", "UA-003", "UA-004", "UA-005"];

// Common Example of Arrays
let grades = [98.5, 94.3, 89.2, 90.1];
console.log("Grades:", grades);

let computerBrands = ["Acer", "Asus", "Lenovo", "Toshiba", "Apple"];
console.log("Computer Brands:", computerBrands);

// Possible use of array but not recommended
let mixedArray = ["Acer", 98.5, true, null, undefined];
console.log("Mixed Array:", mixedArray);

// Creating an array with values from another variable

let city1 = ["Quezon City","Manila"]
let city2 = "Mabacalat";
let city3 = "San Fernando";
let cities = [city1, city2, city3];
console.log("Cities:", cities);

console.log("Cities:", cities.length);

// IF we will be using .length using string var, it will count the number of characters including the white spaces.
// .length when using array, it will count the number of values stored in it.

// Accessing an Array Value
console.log(grades[0]); // 98.5
console.log(grades[3]); // 90.1
console.log(grades[4]); // undefined, since there is no 5th element in the array

let LakersLegends = ["Kobe", "Shaq", "LeBron", "Magic", "Kareem"];
console.log("Lakers Legends:", LakersLegends[1]); // Shaq
console.log("Lakers Legends:", LakersLegends[3]); // Magic

console.log("Array before reassignment");
console.log("Lakers Legends:", LakersLegends);
LakersLegends[2] = "Gasol";
console.log("Lakers Legends:", LakersLegends); // ["Kobe", "Shaq", "Gasol", "Magic", "Kareem"]

let bullsLegends = ["Jordan", "Rose", "Rodman"];
let lastIndex = bullsLegends.length - 1; // 2
console.log("Bulls Legends:", bullsLegends[lastIndex]); // Rodman

// Adding an item in an Array
let newArray = [];
console.log("New Array before adding:", newArray);
newArray[0] = "Acer";
console.log("New Array after adding:", newArray); // 

newArray[newArray.length] = "Asus"; // Adding at the end of the array
console.log("New Array after adding Asus:", newArray); // ["Acer", "Asus"]

// Looping statement with Array
for (let index = 0; index < newArray.length; index++) {
    console.log("New Array Item:", newArray[index]);
}

let numArray = [5, 12, 30, 46, 40];
for (let index = 0; index < numArray.length; index++) {
    if (numArray[index] % 5 == 0) {
        console.log("Divisible by 5:", numArray[index]);
    }else{
        console.log("Not Divisible by 5:", numArray[index]);
    }
}

// Functions and Arrays
let students = [];

function displayStudents() {
    if(students.length == 0 || students == []) {
        console.log("The array is empty.");
    }else {
        for (let index = 1; index < students.length; index++) {
            console.log((index + 1) + ". " + students[index]);
        }
    }
}
function addStudent(name) {
    students[students.length] = name; // Adding a student to the end of the array
    console.log("Student added:", name);
}
displayStudents();