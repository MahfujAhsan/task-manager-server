const express = require('express');
const Task = require('../models/taskModel');
const router = express.Router();
const { createTask, getTasks, getTask, deleteTask, updateTask, getJWT } = require('../controllers/taskController');
const { verifyJWT } = require("../routes/verifyJWT")

router.post("/", verifyJWT, createTask);

router.get("/", verifyJWT, getTasks);

router.get("/:id", verifyJWT, getTask);

router.delete("/:id", verifyJWT, deleteTask);

router.patch("/:id", verifyJWT, updateTask);

router.get("/jwt", getJWT);

module.exports = router;