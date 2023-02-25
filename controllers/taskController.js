const Task = require("../models/taskModel");

// Create a Task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get/Read all Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single task
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json(`NO task with id: ${id}`)
        }
        res.status(200).json(task)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a single task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json(`NO task with id: ${id}`)
        }
        res.status(200).send("Task deleted successfully");
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a single task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true, runValidators: true }
        );
        if (!task) {
            return res.status(404).json(`NO task with id: ${id}`)
        }
        res.status(200).json(task);
    }
    catch {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}