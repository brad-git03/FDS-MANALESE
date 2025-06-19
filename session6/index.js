// console.log("Hello, World!");

let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];

console.log(fruits);
console.log("Length of fruits array:", fruits.length);

// Push() -> adds one or more elements to the end of an array

fruits.push("Mango");
console.log("New set of data:");
console.log(fruits);

fruits.push("Avocado", "Guava");
console.log("New set of data:");
console.log(fruits);

// function with array method

function addFruit(fruit) {
  fruits.push(fruit);
  console.log("Added Fruit: ", fruit);
}

function displayFruits() {
  return fruits;
}

addFruit("Pineapple");
console.log("Updated fruits array:", displayFruits());


// pop()

fruits.pop();
console.log("New set of data: ");
console.log(fruits);

function removeFruit() {
    let removed = fruits.pop();
    console.log("Removed Fruit: ", removed);
    console.log("Updated fruits array after removal:", fruits);
}

removeFruit();

// unshift() -> adds data at the beginning of an array
fruits.unshift("Lime", "Banana");
console.log("New set of data after unshift:");
console.log(fruits);


function addFruitUnshift(fruit) {
  fruits.unshift(fruit);
  console.log("Added Fruit at beginning: ", fruit);
  console.log(fruits);
  
}

addFruitUnshift("Calamansi");

// shift() -> removes the first element of an array
// fruits.shift();
// console.log("New set of data after shift:");
// console.log(fruits);

function addFruitshift() {
  let removed = fruits.shift();
  console.log("Removed Fruit at beginning: ", removed);
}

addFruitshift();
console.log("Updated fruits array after shift:", fruits);

// splice() -> adds/removes elements from an array at a specific index
// array.splice(index, howManyToDelete, item1, item2, ...)
fruits.splice(2, 2, "Strawberry", "Blueberry");
console.log("New set of data after splice:");
console.log(fruits);

function spliceFruits(index, howManyToDelete, newFruits) {
  fruits.splice(index, howManyToDelete, newFruits);
  console.log("Updated fruits array after splice:", fruits);
}

spliceFruits(1, 1, "Peach");

// sort() -> sorts the elements of an array in place and returns the sorted array

fruits.sort();
console.log("Sorted fruits array:");
console.log(fruits);



// function with returns

function sahod(rate, days) {
    let total = rate * days;
    return total;
}

let result = sahod(500, 20);
console.log("Total sahod:", result);

function bonus(amount) {
    let totalSalary = result + amount
    return totalSalary;
}

let netIncome = bonus(1000);
console.log("Net Income:", netIncome);