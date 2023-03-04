const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a Task"]
        },
        description: {
            type: String,
            required: [true, "Please add a description"]
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        },
        inprogress: {
            type: Boolean,
            required: true,
            default: false
        },
        canceled: {
            type: Boolean,
            required: true,
            default: false
        },
        userId: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Task = mongoose.model("Task", taskSchema);

module.exports = Task;