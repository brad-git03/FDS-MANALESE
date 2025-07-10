const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

// Port number

const port = 3000;
// Middlewares
app.use(express.json()); //Convert JSON data to JS object
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded data
app.use(bodyParser.json()); //Parse SQL Data to JS object

// db connection settings
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "task_management"

});

// DB Con Confirmation Message
db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database.");
});

// Get All Task
app.get("/tasks/all", (req,res) => {
    const sql = "SELECT * FROM tasks";
    db.query(sql, (err, results) => {
        if (err) {
            res.send("Error fetching tasks");
            return;
        }else{
            if(results.length <= 0) {
                res.send("No tasks found");
            }else{
                res.json(results);
            }
        }
    });

});

// Add new Task
app.post("/tasks/create", (req, res) => {
    let { taskName, taskDescription, isActive, taskCreated, user_id} = req.body;
    const sql = `INSERT INTO tasks (taskName, taskDescription, isActive, taskCreated, taskCompleted, user_id) VALUES (?, ?, ?, ?, taskCompleted, ?)`;
    db.query(sql, [taskName, taskDescription, isActive = 1, taskCreated = new Date(), user_id = 1], (err, results) => {
        if (err) {
            res.status(500).send("Error creating task");
            return;
        }else{
            res.status(201).send(`${taskName.toUpperCase()} is now added!`);
        }
    })
});

// Get Specific Task -> using tasks_id
app.get("/tasks/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `SELECT * FROM tasks WHERE task_id = ${id}`;

    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send("Error fetching task");
            return;
        }else{
            if(results.length <= 0) {
                res.status(404).send("Task not found");
            }else{
                res.json(results[0]);
            }
        }
    });

})
// Update Task
app.put("/tasks/complete/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `UPDATE tasks SET isActive = ?, taskCompleted = ? WHERE task_id = ${id}`;

    db.query(sql, [isActive = 0, taskCompleted = new Date()], (err, results) => {
        if (err) {
            res.status(500).send("Error updating task");
            return;
        }else{
            res.send("SUCCESS! Task is now completed.");
        }
    });
})

// DELETE TASK
app.delete("/tasks/delete/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `DELETE FROM tasks WHERE task_id = ${id}`;
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send("Error deleting task");
            return;
        }else{
            if(results.affectedRows === 0) {
                res.status(404).send("Task not found");
            }else{
                console.log(`Task with ID ${id} deleted successfully.`);
                res.send("Task deleted successfully");
            }
        }
    });
});



app.listen(port, () => console.log(`Server is running on port ${port}`));
