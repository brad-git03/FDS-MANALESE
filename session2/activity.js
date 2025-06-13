/*
	
	1. Create a function called addNum which will be able to add two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the addition.
	   
	   Create a function called subNum which will be able to subtract two numbers.
	    - Numbers must be provided as arguments.
	    - Return the result of subtraction.

	    Create a new variable called sum.
	     - This sum variable should be able to receive and store the result of addNum function.

	    Create a new variable called difference.
	     - This difference variable should be able to receive and store the result of subNum function.

	    Log the value of sum variable in the console.
	    Log the value of difference variable in the console.

	2. Create a function called multiplyNum which will be able to multiply two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the multiplication.

		Create a function divideNum which will be able to divide two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the division.

		Create a new variable called product.
		 - This product variable should be able to receive and store the result of multiplyNum function.

		Create a new variable called quotient.
		 - This quotient variable should be able to receive and store the result of divideNum function.

		Log the value of product variable in the console.
		Log the value of quotient variable in the console.


	3. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
		- a number should be provided as an argument.
		- look up the formula for calculating the area of a circle with a provided/given radius.
		- look up the use of the exponent operator.
		- return the result of the area calculation.

		Create a new variable called circleArea.
		- This variable should be able to receive and store the result of the circle area calculation.
		- Log the value of the circleArea variable in the console.

	4. Create a function called getAverage which will be able to get total average of four numbers.
		- 4 numbers should be provided as an argument.
		- look up the formula for calculating the average of numbers.
		- return the result of the average calculation.
		
		Create a new variable called averageVar.
		- This variable should be able to receive and store the result of the average calculation
		- Log the value of the averageVar variable in the console.
	

	5. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
		- this function should take 2 numbers as an argument, your score and the total score.
		- First, get the percentage of your score against the total. You can look up the formula to get percentage.
		- Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
		- return the value of the variable isPassed.
		- This function should return a boolean.

		Create a global variable called outside of the function called isPassingScore.
			-This variable should be able to receive and store the boolean result of the checker function.
			-Log the value of the isPassingScore variable in the console.
*/

// 1. Addition and Subtraction
// Addition
function addNum(num1, num2) {
    let sum = num1 + num2;
    console.log("Sum:",sum);
}

// Subtraction
function subNum(num1, num2) {
    let difference = num1 - num2;
    console.log("Difference:",difference);
}

// Invocation
addNum(5, 3);
subNum(10, 4);

//2. Multiplication and Division
function multiplyNum(num1, num2){
    let product = num1 + num2;
    console.log("Product:",product);
}
function divideNum(num1, num2) {
    let quotient = num1 / num2;
    console.log("Quotient:",quotient);
}

// Invocation
multiplyNum(6, 7);
divideNum(20, 4);

//3. Get Circle Area
function getCircleArea(radius) {
    const pi = 3.14;
    let circleArea = pi * (radius ** 2); // A=πr2
    console.log("Area : ",circleArea);
}

// Invocation
getCircleArea(5);

//4. Get Average
function getAverage(num1, num2, num3, num4) {
    let averageVar = (num1 + num2 + num3 + num4) / 4;
    console.log("Average:", averageVar);
}
// Invocation
getAverage(10, 20, 30, 40);

//5. Check if Passed
// function checkIfPassed(score, totalScore) {
//     let percentage = (score / totalScore) * 100; // Calculate percentage
//     let isPassed = percentage > 75; // Check if greater than passing percentage
//     console.log(isPassed);
// }
// let isPassingScore = checkIfPassed(74, 100); // Example score and total score

function checkIfPassed(score, totalScore) {
    console.log("is passing?");
    console.log((score / totalScore) * 100 > 75);
}
checkIfPassed(73, 100); // Example score and total score