// Non-Mutator Methods

let countries = ["US","PH","CAN","SG","TH","PH", "FR", "DE"]

// indexOf() -> returns the index of the first occurrence of a specified value in an array

let indexOf = countries.indexOf("PH");
console.log("Index of 'PH':", indexOf);

// lastIndexOf() -> returns the index of the last occurrence of a specified value in an array
let lastIndexOf = countries.lastIndexOf("PH");
console.log("Last index of 'PH':", lastIndexOf);

// slice() -> returns a shallow copy of a portion of an array into a new array object

let sliceA = countries.slice(2);
console.log("Result from sliceA:", sliceA);

let sliceB = countries.slice(2, 4);
console.log("Result from sliceB:", sliceB);

let sliceC = countries.slice(-3);
console.log("Result from sliceC:", sliceC);

// concat() -> returns a new array that is the result of concatenating two or more arrays
let taskA  = ["drink html", "eat javascript"];
let taskB = ["inhale css", "breathe sass"];
let taskC = ["get git", "be node"];

let tasks = taskA.concat(taskB);
console.log("Result from tasks:", tasks);

let allTasks = taskA.concat(taskB, taskC);
console.log("Result from allTasks:", allTasks);
let combinedTask = allTasks.concat("smell express", "throw react");
console.log("Result from combinedTask:", combinedTask);

// iteration methods
// forEach() -> executes a provided function once for each array element
allTasks.forEach(function(task) {
    console.log("Task:", task);
})

let filteredTasks = []
allTasks.forEach(function(task) {
    if (task.length > 10) {
        filteredTasks.push(task);
    }
});
console.log("Filtered tasks:", filteredTasks);

let numbers = [1, 2, 3, 4, 5];

// every() -> tests whether all elements in the array pass the test implemented by the provided function

let allValid = numbers.every(function(numbers) {
    return numbers < 3;})
console.log("All numbers are valid:", allValid);

// some() -> tests whether at least one element in the array passes the test implemented by the provided function
let someValid = numbers.some(function(numbers) {
    return numbers < 3;})
console.log("Some numbers are valid:", someValid);

// filter() -> creates a new array with all elements that pass the test implemented by the provided function
let filteredValid = numbers.filter(function(number) {
    return number < 3;
});
console.log("Filtered valid numbers:", filteredValid);