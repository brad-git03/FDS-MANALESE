// console.log("Hello, World!");

// Selection Control Structures

// Conditional Statements
//1. Conditional Statements
let num1 = 5;
if (num1 < 3 ) {
    console.log("Hello, World!");
}
// For the if the statement to work, the condition must be true.
// 2. If-Else Statement
let input1 = Number (prompt("Enter a number: "));
if (input1 == 3) {
    console.log("num2 is equal to 3");
}else{
    console.log("num2 is not equal to 3");
}


// 3. If-Else Else-if Statement
let input2 = Number (prompt("Enter a number: "));
if (input2 < 3) {
    console.log("num2 is less than 3");
}
else if (input2 == 3) {
    console.log("num2 is equal to 3");
}
else {
    console.log("num2 is greater than 3");
}
//
let isLegalAge = false;
let isWorking = true;
if (isLegalAge == 1 && isWorking == 1) {
    console.log("You are eligible to vote.");
}else if (isLegalAge == 1 && isWorking == 0) {
    console.log("You are not eligible to vote because you are not working.");
}
else if (isLegalAge == 0 && isWorking == 1) {
    console.log("You are not eligible to vote because you are not of legal age.");
}
else {
    console.log("You are not eligible to vote because you are not of legal age and not working.");
}

// Functions with conditional statements
function checkGender(gender){
    let formatted_gender = gender.toUpperCase();
    if(formatted_gender === 'M' ){
        console.log("Male");
    }else if(formatted_gender === 'F'){
        console.log("Female");
    }else{
        console.log("Others");
    }        
}

checkGender(prompt("Enter gender (M/F/O): "));


// 2. Switch case statement
let color = prompt("Enter a color (red, green, blue): ").toLowerCase();
switch (color) {
    case 'red':
        console.log("You chose red.");
        break;
    case 'green':
        console.log("You chose green.");
        break;
    case 'blue':
        console.log("You chose blue.");
        break;
    default:
        console.log("Color not recognized.");
}