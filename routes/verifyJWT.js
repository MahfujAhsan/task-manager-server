
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const verifyJWT = async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send("Unauthorized Access");
    }
    const accessToken = authorization.split(' ').pop();

    if (!accessToken) {
        res.status(403).send('unauthorized access');
    }

    jwt.verify(accessToken, process.env.JWT_SECRET, async (error, user) => {
        if (error) {
            return res.status(403).send(error.message);
        }
        const userFromCollection = await User.findOne({ email: user.email });

        if (userFromCollection) {
            req.body.user = userFromCollection;
            return next();
            // return res.json(userFromCollection);
        }
        return res.send('unauthorized access')
    });

    // res.json('unauthorized access')
};

module.exports = { verifyJWT };