
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { DEBUG_MODE } from '../config/index.js'
// const { DEBUG_MODE } = require('../config/index.js')
const { ValidationError } = require('joi')
import CustomErrorHandler from "../services/CustomErrorHandler.js";
// const CustomErrorHandler = require('../services/CustomErrorHandler.js')


const errorhandler = (err, req, res, next) => {

    console.log(ValidationError)
    let statusCode = 500;
    let data = {
        message: err.message,
        ...(DEBUG_MODE === 'true' && { originalError: err.message })
    }
    if (err instanceof ValidationError) {
        statusCode = 422;
        data = {
            message: err.message
        }
    }
    if (err instanceof CustomErrorHandler) {
        statusCode = err.status;
        data = {
            message: err.message
        }
    }

    return res.status(statusCode).json(data)
}
export default errorhandler