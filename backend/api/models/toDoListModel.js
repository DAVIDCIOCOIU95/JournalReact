const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String}
});

const Task = new mongoose.model("Task", taskSchema);
module.exports = Task;