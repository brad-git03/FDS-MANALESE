// console.log("Hello, World!");

// Repetition Control Structures
// while Loop includes expression -> true

/*
SYNTAX:

while(expression:true) {
    -> code block to be executed
    }    
*/

// while Loop Example
let count = 5;
while (count !== 0) {
    console.log("While: " + count);
    count--;
}

// do...while Loop includes expression -> true

/*
SYNTAX:
do {
    -> code block to be executed
    -> iterator
}while(expression:true);
*/

let number = Number(prompt("Enter a number: "));
do {
    console.log("Do-While: " + number);
    number++;
}while (number <= 20);


// for Loop includes expression -> true
/*
SYNTAX:
for(initialization; expression -> true; iterator -> increment/decrement) {
    -> code block to be executed
}
*/

for (let count = 0; count <= 20; count++) {
    console.log("For: " + count);
}

let myString = "Alex";

// .length -> to check the length of the string or an array / check how many characters are in the string

 console.log(myString.length);

 console.log(myString[0]); // A
 console.log(myString[1]); // l

 for(let i = 0; i < myString.length; i++) {
     console.log("For Loop String: " + myString[i]);
 }

 let myName = "AlEx";
// .toLowerCase() -> converts the string to lowercase
// .toUpperCase() -> converts the string to uppercase
for (let i = 0; i < myName.length; i++) {
    if (myName[i].toLowerCase() == "a" ||
        myName[i].toLowerCase() == "e" ||
        myName[i].toLowerCase() == "i" ||
        myName[i].toLowerCase() == "o" ||
        myName[i].toLowerCase() == "u") {
        console.log("Vowel") // if lowercase detected for every index, print Vowel
    }else{
        console.log(myName[i]);
    }
}

// continue and break

for (let x = 0; x < 50; x++) {
    if(x % 2 == 0) {
        continue; // skip the current iteration if x is even
    }else if (x == 25) {
        break;
    }else {
        console.log("Odd Number: " + x);
    }
}