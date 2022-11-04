import { createRequire } from "module";
const require = createRequire(import.meta.url);
const jwt = require('jsonwebtoken')
import { JWT_SECRET } from '../config/index.js';


class JwtService {
    static sign(payload, expiry = '1y', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }
    static verifytoken(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret)
    }
}
export default JwtService 
