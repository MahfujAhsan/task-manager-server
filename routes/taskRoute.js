const express = require('express');
const Task = require('../models/taskModel');
const router = express.Router();
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController');

router.post("/", createTask);

router.get("/", getTasks);

router.get("/:id", getTask);

router.delete("/:id", deleteTask);

router.patch("/:id", updateTask);

module.exports = router;