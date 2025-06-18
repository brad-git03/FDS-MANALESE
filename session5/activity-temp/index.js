// console.log("Hello World!");

// Array Traversal

let student1 = "UA-001";
let student2 = "UA-002";
let student3 = "UA-003";
let student4 = "UA-004";
let student5 = "UA-005";

// Convert ot array
let studentNumbers = ["UA-001", "UA-002", "UA-003", "UA-004", "UA-005"];

// Common example of arrays
let grades = [98.5, 94.3, 89.2, 90.1];
console.log(grades);

let computerBrands = ["Acer", "Asus", "Lenovo", "Toshiba", "Apple"];
console.log(computerBrands);

// Possible use of array but not recommended
let mixedArray = [12, "John", true, null];
console.log(mixedArray);

// Creating an array with values from another variable
let city1 = "Quezon City";
let city2 = "Mabalacat City";
let city3 = "San Fernando City";
// Nested Array -> an array inside an array
let city4And5 = ["Baguio City", "Caloocan City"];

let cities = [city1, city2, city3, city4And5];
console.log(cities);

// IF we will be using .length using string var, it will count the number of characters including the white spaces.
// .length when using array, it will count the number of values stored in it.
console.log(cities.length);

// Accessing an Array Value
console.log(grades[0]); //98.5
console.log(grades[3]); //90.1
console.log(grades[10]); //undefined -> empty

let lakersLegends = ["Kobe", "Shaq", "LeBron", "Magic", "Kareem"];

console.log(lakersLegends[1]); //Shaq
console.log(lakersLegends[3]); //Magic

console.log("Array before reassignment");
console.log(lakersLegends);
lakersLegends[2] = "Gasol";
console.log("Array after reassignment");
console.log(lakersLegends);

let bullsLegends = ["Jordan", "Rose", "Rodman"];
let lastIndex = bullsLegends.length - 1;
console.log(bullsLegends[lastIndex]);

// Adding an item in an array
let newArray = [];
console.log(newArray);

newArray[0] = "Cloud Strife";
console.log(newArray);

newArray[newArray.length] = "Tifa Lockhart";
console.log(newArray);

// Looping statement with array
for(let index = 0; index < newArray.length; index++){
    console.log("LOOP: " + newArray[index]);
}

let numArray = [5, 12, 30, 46, 40];

for(let index = 0; index < numArray.length; index++){
    if(numArray[index] % 5 == 0){
        console.log(numArray[index] + " is divisible by 5.")
    }else{
        console.log(numArray[index] + " is not divisible by 5.")
    }
}

// Functions and Arrays

let students = [];

function displayStudents(){
    if(students.length == 0 || students == []){
        console.log("The array is empty");
    }else{
        for(let index = 0; index < students.length; index++){
            console.log((index + 1) + ". " + students[index]);
        }
    }
}

function addStudent(name){
    students[students.length] = name;
    console.log(name + " is added to the list.");
}