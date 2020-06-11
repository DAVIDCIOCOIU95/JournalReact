const express = require("express");
const router = express.Router();
const toDoList = require('../controllers/toDoListController');

// todoList Routes
router.route('/')
    .get(toDoList.listAllTasks)
    .post(toDoList.createATask);

    
    module.exports = router;
