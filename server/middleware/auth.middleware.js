const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const auth = async(req, res, next) => {
    try {
        console.log(req.params)
        const token = req.params.token || req.body.token || req.query.token || req.headers['authorization']?.split(' ')[1];
        console.log(token)
        if (!token) {
            return res.status(401).json({ message: 'not allowed' });
        }
        console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.log(error.message)
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = auth;