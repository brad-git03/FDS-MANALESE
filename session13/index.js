const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

// Port number

const port = 3000;
// Middlewares
app.use(express.json()); //Convert JSON data to JS object
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded data
app.use(bodyParser.json()); //Parse SQL Data to JS object
app.use(cors()); //Enable CORS for all origins

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

// .get = HTTP GET method
// .post = HTTP POST method
// .put = HTTP PUT method
// .delete = HTTP DELETE method
// .patch = HTTP PATCH method
// .options = HTTP OPTIONS method
// .head = HTTP HEAD method
// .trace = HTTP TRACE method


// Get All Task
app.get("/tasks/all", (req, res) => {
    const sql = "SELECT * FROM tasks";
    db.query(sql, (err, results) => {
        if (err) {
            res.send({
                code: 0,
                codeMessage: "Error fetching tasks",
                details: "There was an error while fetching tasks from the database."
            });
            return;
        } else {
            if (results.length <= 0) {
                res.send({
                    code: 1,
                    codeMessage: "No tasks found",
                    details: "The task table in the database is empty."
                });
            } else {
                res.json({
                    code: 1,
                    codeMessage: "Tasks fetched successfully",
                    details: results
                });
            }
        }
    });

});

// Add new Task
app.post("/tasks/create", (req, res) => {
    let { taskName, taskDescription, isActive, taskCreated, user_id } = req.body;
    const sql = `INSERT INTO tasks (taskName, taskDescription, isActive, taskCreated, taskCompleted, user_id) VALUES (?, ?, ?, ?, taskCompleted, ?)`;
    db.query(sql, [taskName, taskDescription, isActive = 1, taskCreated = new Date(), user_id = 1], (err, results) => {
        if (err) {
            res.status(500).send({
                code: 0,
                codeMessage: "Error fetching tasks",
                details: "There was an error while fetching tasks from the database."
            });
            return;
        } else {
            res.status(201).send({
                code: 1,
                codeMessage: "task-added",
                details: `${taskName.toUpperCase()} is now added!`
            });
        }
    })
});

// Get Specific Task -> using tasks_id
app.get("/tasks/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `SELECT * FROM tasks WHERE task_id = ?`;

    db.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).send({
                code: 0,
                codeMessage: "Task-not-found",
                details: "Cannot find the task with the provided ID."
            });
            return;
        } else {
            if (results.length <= 0) {
                res.status(404).send({
                    code: 0,
                    codeMessage: "Task-not-found",
                    details: "Cannot find the task with the provided ID."
                });
            } else {
                res.json({
                    code: 1,
                    codeMessage: "Task-found",
                    details: results[0]
                });
            }
        }
    });

})
// Update Task
app.put("/tasks/complete/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `UPDATE tasks SET isActive = ?, taskCompleted = ? WHERE task_id = ?`;

    db.query(sql, [isActive = 0, taskCompleted = new Date(), id], (err, results) => {
        if (err) {
            res.status(500).send({
                code: 0,
                codeMessage: "Task-not-found",
                details: "Cannot find the task or not yet completed."
            });
            return;
        } else {
            res.send({
                code: 1,
                codeMessage: "Task-completed",
                details: "Task has been marked as completed successfully."
            });
        }
    });
})

// DELETE TASK
app.delete("/tasks/delete/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `DELETE FROM tasks WHERE task_id = ?`;
    db.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).send({
                code: 0,
                codeMessage: "Task-not-found",
                details: "Cannot find the task"
            });
            return;
        } else {
            if (results.affectedRows === 0) {
                res.status(404).send({
                    code: 0,
                    codeMessage: "Task-not-found",
                    details: "Cannot delete the task with the provided ID."
                });
            } else {
                console.log(`Task with ID ${id} deleted successfully.`);
                res.send({
                    code: 1,
                    codeMessage: "Task-deleted",
                    details: "Task has been deleted successfully."
                });
            }
        }
    });
});

// USER ROUTES

// User sign up
app.post("/users/register", async (req, res) => {
    const { fname, mname, lname, email, pass } = req.body;

    if (!fname || !mname || !lname || !email || !pass) {
        res.send({
            code: 0,
            codeMessage: "some-fields-empty",
            details: "Please fill all required fields."
        })
    }

    const check = "SELECT * FROM users WHERE email = ?";

    db.query(check, [email], async (err, result) => {
        if (err) {
            res.send({
                code: 0,
                codeMessage: "server-error",
                details: "Cannot accept your registration at the moment."
            })
        }

        if (result.length > 0) {
            res.send({
                code: 2,
                codeMessage: "user-already-existing",
                details: "The email you provided was already registered."
            })
        } else {
            const hashedPassword = await bcrypt.hash(pass, 10);

            const sql = "INSERT INTO users(fname, mname, lname, email, pass) VALUES (?, ?, ?, ? ,?)";

            db.query(sql, [fname, mname, lname, email, hashedPassword], (err, result) => {
                if (err) {
                    res.send({
                        code: 0,
                        codeMessage: "server-error",
                        details: "Cannot accept your registration at the moment."
                    })
                } else {
                    res.json({
                        code: 1,
                        codeMessage: "registration-success",
                        details: `${fname} ${lname}, you are now registered.`
                    })
                }
            })
        }

    })
})

// User login
app.post("/users/login", (req, res) => {
    const { email, pass } = req.body;
    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {
        if (err) {
            res.send({
                code: 0,
                codeMessage: "server-error",
                details: "Cannot accept your login at the moment."
            })
        } else if (result.length <= 0) {
            res.send({
                code: 0,
                codeMessage: "user-not-found",
                details: "The email you provided was not registered."
            })
        } else {
            const user = result[0];
            const isMatch = await bcrypt.compare(pass, user.pass);

            if (!isMatch) {
                res.send({
                    code: 0,
                    codeMessage: "invalid-credentials",
                    details: "The password you provided is incorrect."
                });
            }else {
                res.send({
                    code: 1,
                    codeMessage: "login-success",
                    details: `Welcome back, ${user.fname} ${user.lname}!`
                });
                console.log(`User ${user.fname} ${user.lname} logged in successfully.`);
            }
        }
    })

})


app.listen(port, () => console.log(`Server is running on port ${port}`));
