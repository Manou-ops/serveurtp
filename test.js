const express = require("express");
const test = express();
const port = 5000

test.use(express.json())

test.use("/tasks", require("./routes/tasks.route"))

test.listen(port, ()=>{
    console.log("hello")
} )
