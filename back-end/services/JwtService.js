const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

class JwrService {
    static sign(payload, expiry = '60', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }
    static verifytoken(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret)
    }
}
module.exports = JwrService