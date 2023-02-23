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
        if(!task) {
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
    
};

module.exports = {
    createTask,
    getTasks,
    getTask
}