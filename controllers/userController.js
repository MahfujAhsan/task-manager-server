const User = require("../models/userModel")
const jwt = require('jsonwebtoken');
// const jwt = req

// Create a new User
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const user = req.body;

        const accessToken = jwt.sign(user, process.env.JWT_SECRET);

        res.status(200).json({accessToken});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    createUser, loginUser
}