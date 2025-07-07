// Server Preparation and Creation
// Since Node.js is already installed in our device, we can require the application by declaring a variable and requiring the said module.

const http = require('http');

// Port Creation
const PORT = 4000;

// Mock Database -> Array
let items = ["Laptop", "Phone"];
let users = [];
// Server Creation via http/node.js
const app = http.createServer((request, response) =>{
    
    
    // Endpoint Creation via Node Server
    // To access this endpoint we will be using localhost:4000/greeting
    // www.mylink.com/greeting
    if(request.url == "/greeting") {
        response.end("Hello, welcome to our server!"); // Response for the endpoint
    }else if(request.url == "/homepage") {
        response.end("Welcome to the homepage!"); // Response for the homepage endpoint
    }else if(request.url == "/about") {
        response.writeHead(200, {'Content-Type': 'text/plain'}); // Set response header for plain text
        // This is the about page endpoint
        response.end("This is the about page!"); // Response for the about page endpoint
    }else if(request.url == "/items" && request.method == "GET") {
        response.writeHead(200);
        response.end(JSON.stringify(items)); // Response for the items endpoint
    }else if(request.url == "/items/add" && request.method == "POST") {
        response.writeHead(201);
        items.push('Desktop'); // Adding a new item to the items array
        response.end("Item Added"); // Response for the homepage endpoint        
    }
    // login/register/show users
    else if(request.url == "/login" && request.method == "GET") {
        if(users.length == 0) {
            response.writeHead(404);
            response.end("No users found"); // Response for no users found
            return;
        }else{
        response.writeHead(200);
        response.end("Login Successful"); // Response for the login endpoint
        }
    }else if(request.url == "/register" && request.method == "POST") {
        response.writeHead(201);
        users.push('Juan Dela Cruz'); // Adding a new user to the items array
        response.end("Registration Successful"); // Response for the register endpoint
    }else if(request.url == "/users" && request.method == "GET") {
        if(users.length == 0) {
            response.writeHead(404);
            response.end("No users found"); // Response for no users found
            return;
        }else{
        response.writeHead(200);
        response.end(JSON.stringify(users)); // Response for the users endpoint
        }
    }else if(request.url == "/users" && request.method == "DELETE") {
        if(users.length == 0) {
            response.writeHead(404);
            response.end("No users found"); // Response for no users found
            return;
        }else{
        response.writeHead(200);
        users.pop('Juan Dela Cruz') // Resetting the users array
        response.end("Users Deleted"); // Response for the delete users endpoint
        }
    }else{
        response.writeHead(404);
        response.end("404 Not Found"); // Set response header for plain text
    }
})






// Port listening
app.listen(PORT);// Server Creation

// Confirmation Message
console.log(`Server is running on http://localhost:${PORT}`);// Server Creation