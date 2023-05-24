const Task = require("../models/taskModel");
const User = require("../models/userModel");

// Create a Task
const createTask = async (req, res) => {
    const { task, user } = req.body;

    // return res.json({ task, user });
    task.userId = user._id;
    try {
        const newTask = await Task.create(task)
        res.status(200).json(newTask);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get/Read all Tasks
const getTasks = async (req, res) => {
    // return res.json(req.body.user);
    const { user } = req.body
    try {
        const tasks = await Task.find({ userId: user._id });
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
        res.status(200).json(task);
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
            req.body.task,
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

// // Create JWT token
// const getJWT = async (req, res) => {
//     try {
//         const email = req.query.email;
//         const query = { email: email };

//         const user = await User.findById(query);

//         if (user) {
//             const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '24h' });
//         }
//         res.status(200).json({ accessToken: token })
//     }
//     catch {
//         res.status(500).json({ message: error.message });
//     }
// };

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}