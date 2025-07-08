// Preparation of Express Server
const express = require("express");

// Create the server and store in a variable
const app = express();

// Port number
const port = 5000;


// Middlewares
// To convert incoming and outgoing data to JS Object
app.use(express.json());
// Allows users to input data in a form
// Reads/fetch data from a form
app.use(express.urlencoded({extended: true}));

// Server Routes
app.get("/hello", (req, res) => {
    res.status(200).send("Welcome to my World!");
});

let friends = [];

// Get all friends
app.get("/friends/list", (req, res) => {
    if(friends.length <= 0) {
        res.status(200).send("No friends found!");
    }else{
        res.status(200).send(friends);
    }
});

// Getting an input from postman
app.get("/input", (req,res) => {
    res.send(`Hello ${req.body.name}`);
})

// Add a new friend
app.post("/friends/add", (req, res) => {
    let friend = req.body.name;
    
    let checkFriend = friends.includes(friend);
    if(checkFriend) {
        return res.status(400).send(`Friend ${friend} already exists!`);
    }else{
        friends.push(friend);
        res.status(201).send(`Friend ${friend} added successfully!`);
    }
});


// Unfriend a friend
app.delete("/friends/remove", (req, res) => {
    let friend = req.body.name;
    let checkFriend = friends.includes(friend);
    if(checkFriend) {
        friends.splice(friends.indexOf(friend), 1);
        res.status(200).send(`Friend ${friend} removed successfully!`);
    } else {
        res.status(400).send(`Friend ${friend} does not exist!`);
    }
});


// Port Listening
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Unfriend