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
    const user = req.body;

    const accessToken = jwt.sign(user, process.env.JWT_SECRET);

    res.json({ accessToken });

}

module.exports = {
    createUser, loginUser
}