import { DEBUG_MODE } from '../config/index.js';
import ValidationError from 'joi';
import CustomErrorHandler from '../services/CustomErrorHandler.js';

const errorhandler = (err, req, res, next) => {
    let statusCode = 500;
    let data = {
        message: err.message,
        ...(DEBUG_MODE === 'true' && { originalError: err.message })
    }
    // if (err instanceof ValidationError) {
    //     statusCode = 422;
    //     data = {
    //         message: err.message
    //     }
    // }
    if (err instanceof CustomErrorHandler) {
        statusCode = err.status;
        data = {
            message: err.message
        }
    }

    return res.status(statusCode).json(data)
}
export default errorhandler