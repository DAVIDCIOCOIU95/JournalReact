const express = require("express");
const router = express.Router();
const toDoList = require('../controllers/toDoListController');

router.route("/delete/:id")
.delete(toDoList.deleteNote);
    module.exports = router;
