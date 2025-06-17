/*
PROBLEM #1:

3. Create a variable number that will store the value of the number provided by the user via the prompt.
4. Create a for loop that will be initialized with the number provided by the user, will stop when the value is less than or equal to 0 and will decrease by 1 every iteration.
5. Create a condition that if the current value is less than or equal to 50, stop the loop.
6. Create another condition that if the current value is divisible by 10, print a message that the number is being skipped and continue to the next iteration of the loop.
7. Create another condition that if the current value is divisible by 5, print the number.

PROBLEM #2:
8. Create a variable that will contain the string supercalifragilisticexpialidocious.
9. Create another variable that will store the consonants from the string.
10. Create another for Loop that will iterate through the individual letters of the string based on it’s length.
11. Create an if statement that will check if the letter of the string is equal to a vowel and continue to the next iteration of the loop if it is true.
12. Create an else statement that will add the letter to the second variable.

*/

// ADD CODE BELOW PROBLEM #1

let num1 = Number(prompt("Enter a number: "));

for (let x = num1; x <= 100; x--) {
    if (x <= 50) {
        console.log("The current value is at 50. Terminating the loop.");
        break; // stop the loop if x is less than or equal to 50
    }else if(x % 10 == 0) {
        console.log("The number is divisible by 10. Skipping number.");
        continue; // skip the current iteration if x is even
    }else if (x % 5 == 0) {
        console.log(x);
    }else{
        continue
    }
}


//2.






// ADD CODE BELOW PROBLEM #2

let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = '';

for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == 'a' || 
        string[i].toLowerCase() == 'e' || 
        string[i].toLowerCase() == 'i' || 
        string[i].toLowerCase() == 'o' || 
        string[i].toLowerCase() == 'u') {
        continue; // skip vowels
    } else {
        filteredString += string[i]; // add consonant to filteredString
    }
}
console.log(filteredString);