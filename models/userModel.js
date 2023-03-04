const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please add a Email Address"]
        },
        name: {
            type: String,
            required: [true, "Please add a Name"]
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;