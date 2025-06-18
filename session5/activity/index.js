const groceryList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

console.log("Items to buy:")
console.log(groceryList);

// Adding Grocery Item
function addItem(item) {
    groceryList[groceryList.length] = item;
    console.log(item + " added to grocery list.");
}

addItem("Apples");
console.log(groceryList);

// Getting Item by Index

/*Add commentMore actions
    6. Create function which is able to receive an index number as a single argument return the item accessed by its index.
        -function should be able to receive a single argument.
        -return the item accessed by the index.
        -Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        -log the itemFound variable in the console.
*/


function getItemByIndex(index){
    if(groceryList.length == 0 || groceryList == [] || index < 0 || index >= groceryList.length){
        console.log("The array is empty");
    }else {
        itemFound = groceryList[index];
    }
}

getItemByIndex(0);
console.log("Item found : " + itemFound);

// Deleting Last Item

function deleteItem() { //Add commentMore actions
    if (groceryList.length == 0) {
        console.log("No items to delete.");
    }else{
        let LastItem = groceryList[groceryList.length - 1];
        groceryList.length -= 1; // Shorten the array by 1         
        deletedLastItem = LastItem; // Store the last item in a variable     
        console.log("Item Deleted: " + LastItem);    
    }
}

deleteItem();
console.log(groceryList);

/*Add commentMore actions
    8. Create function which is able to update a specific item in the groceryList array by its index.
        -Function should be able to receive 2 arguments, the update and the index number.
        -First, access and locate the item by its index then re-assign the item with the update.
        -This function should not have a return.
        -Invoke the function and add the update and index number as arguments.
        -Log the groceryList array in the console.
*/

   
function updateItemByIndex(index, updatedItem) {
    if (index < 0 || index >= groceryList.length) {
        console.log("Invalid index.");
    } else {
        groceryList[index] = updatedItem; // Update the item at the specified index
        console.log("Item at index " + index + " updated to: " + updatedItem);
    }
}

updateItemByIndex(4, "Bananas");
console.log(groceryList);

/*Add commentMore actions
    9. Create a function which is able to iterate over the array to display each item in the console.
        -This function will not receive any argument
        -Using a for loop, iterate over the groceryList array to create new array where each element from groceryItems has prefixed number like [1. Milk, 2.Veggies...]
        -Return the newly formed array
        -Invoke the function and store it inside a variable itemsFound 
        - Log the itemsFound variable in the console.
*/
// Sample grocery list

let itemsFound = []; // global variable

function displayItems() {
    for (let i = 0; i < groceryList.length; i++) {
        itemsFound[i] = (i + 1) + ". " + groceryList[i];
    }
}

// Call the function to fill itemsFound
displayItems();

console.log("Grocery List:");
console.log(itemsFound);


/*
    10. Create a function which is able to iterate over the array to search for an item.
        -This function will receive the name of the element as an argument
        -Create an index variable with a value of 0
        -Using a for loop, iterate over the array to search for each index that has the same value as the item.
        -If it found, reassign the value of the variable to the current value of index
        -After the loop, check if the value of the varialbe is not -1
            -If so, return the string "The item exists in the list."
            -If not, return the string "The item is not in the list."
        -Invoke the function to search for an item and store the result in a variable isItemFound.
        -Log the value of isItemFound in the console.
*/

let resultMessage = ""; // temporary variable for blank space

function searchItem(itemName) {
    let index = -1; 

    for (let i = 0; i < groceryList.length; i++) {
        if (groceryList[i] === itemName) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        resultMessage = "The item exists in the list.";
    } else {
        resultMessage = "The item is not in the list.";
    }
}

searchItem("Bananas");

// Now assign the message to the const
const isItemFound = resultMessage;
console.log(isItemFound);


/*
11. Create a function which is able to remove a specific item in the array by index
    - This function will recieve the index as argument
    -Add an if statement to check if the index is less than 0 or greater than or equal to the .length of the groceryList
        -If it is, return invalid index.
    -Else, use for loop to iterate over the groceryList to reassign values starting from the argument sent.
        -reassign the value of the index into the next element by adding 1 to the current index
    -Outside the loop, decrease the length of the array
    -Return string Element removed successfully.
    -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
    -Log the isUsersEmpty variable in the console.
*/

let isUsersEmpty = ""; // global variable to store result

function removeElement(index) {
    if (index < 0 || index >= groceryList.length) {
        isUsersEmpty = "Invalid index.";
    } else {
        for (let i = index; i < groceryList.length - 1; i++) {
            groceryList[i] = groceryList[i + 1];
        }
        groceryList.length = groceryList.length - 1;
        isUsersEmpty = "Element removed successfully.";
    }
}

// Call the function
removeElement(1);

// Assign the result to const without using return
const removedElement = isUsersEmpty;

console.log(removedElement); // → "Element removed successfully."
console.log(groceryList);    // → [ 'Milk', 'Bread', 'Eggs' ]

/*
12. Create function which is able to delete all items in the array.
    -You can modify/set the length of the array.
    -The function should not return anything.
*/

function deleteAll() {
    groceryList.length = 0;
}
deleteAll();
console.log(groceryList); // Output: []

/*
13. Create a function which is able to check if the array is empty.
    -Add an if statement to check if the length of the users array is greater than 0.
        -If it is, return false.
    -Else, return true.
    -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
    -Log the isUsersEmpty variable in the console.

*/

let users = []; // or try with ["Alice"]
let result = false; // global temp variable

function isEmpty() {
    if (users.length > 0) {
        result = false;
    } else {
        result = true;
    }
}

isEmpty(); // run the function

const isUsersEmpty1 = result; // assign result to const
console.log(isUsersEmpty1);