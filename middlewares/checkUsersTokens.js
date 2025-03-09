// middlewares/checkUsersTokens.js
const jwt = require('jsonwebtoken');
const User = require('../models/users.model.js');

const checkUserToken = async (req, res, next) => {
    const token = req.cookies.token; // Get token from cookies

    if (!token) {
        return res.status(401).send({ status: 401, message: 'you are unathorized !!' });
    }

    try {
        const user = jwt.verify(token, process.env.JSON_WEB_TOKEN); // Verify the token

        const foundedUser = await User.findOne({ _id: user._id }); // Check if user exists

        if (!foundedUser) {
            return res.status(401).send({ status: 401, message: 'No user found by this token' });
        }

        req._id = foundedUser._id;
        req.user = foundedUser;
        next();
    } catch (error) {
        return res.status(401).send({ status: 401, message: 'Invalid token' });
    }
};

module.exports = checkUserToken; // Export the middleware function
