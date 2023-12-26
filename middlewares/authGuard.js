const jwt = require('jsonwebtoken');

const authGuard = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN);
        const { name, email } = decode;
        req.name = name;
        req.email = email;
        next();
    } catch (error) {
        next("Authentication Failed")
    }
}

module.exports = authGuard;