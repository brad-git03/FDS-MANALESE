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
function displayItems() {
    let itemsFound = [];
    if (groceryList.length == 0) {
        console.log("No items to display.");
    }else {
        for(let index = 0; index < groceryList.length; index++){
            console.log((index + 1) + ". " + itemsFound[index]);
        }
    }
}

console.log("Grocery List:");
itemsFound = displayItems();
console.log(itemsFound);