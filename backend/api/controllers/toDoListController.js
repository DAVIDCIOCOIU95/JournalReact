const mongoose = require('mongoose');
const Task = require("../models/toDoListModel");

exports.listAllTasks = (req,res) => {
    Task.find({}, (err, task) => {
        if(err)
            res.send(err);
            console.log("Request Made")
        res.json(task);
    })
}

exports.createATask = (req, res) => {
    const newTask = new Task(req.body);
    newTask.save((err, task) => {
        if(err)
            res.send(err);
        res.json(task);
    })
}

exports.deleteNote = (req, res) => {
    Task.findByIdAndRemove(req.params.id, function(err) {
        if(!err) {
            console.log("Removed");
            res.send("Success");
        }
    });
}