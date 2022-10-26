import CustomErrorHandler from "../../services/CustomErrorHandler.js"
// const jwt_service = require('../../services/JwtService')
// const { SECRET_KEY } = require('../../config/index')
// const User = require('../../models/Users')
const auth = async (req, res, next) => {
    console.log(req.headers)
    let authHeader = req.headers.accesstoken;
    console.log("authheader:" + authHeader)
    if (!authHeader) {
        return next(CustomErrorHandler.unAuthorized("No Access Token"))
    }
    else {
        try {
            const { id } = jwt_service.verifytoken(authHeader, SECRET_KEY)
            const user = await User.findOne({ where: { id: id }, attributes: { exclude: ['password'] } });
            if (user === null) {
                return next(CustomErrorHandler.notFound("User Not Found"))
            } else {
                req.user = user
                return next()
            }
        } catch (err) {
            next(CustomErrorHandler.unAuthorized(err))
        }

    }
}
export default auth 