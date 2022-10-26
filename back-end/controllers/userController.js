import CustomErrorHandler from '../services/CustomErrorHandler.js'
import { JoiValidation } from '../validators/JoiValidation.js'
import { VALID_MODE } from '../config/index.js'
import md5 from 'md5'
import User from '../models/User.js'
import Extractdata from '../services/ExtractData.js'
import errorHandler from '../middlewares/errorHandler.js'
import multer from 'multer'
import path from 'path'
// const User = require('../models/Users')
const registercontroller = async (req, res, next) => {

    // extract error from validation schema
    try {
        let orderedData;
        const { registerType = 'recruiter' } = req.body
        if (registerType == 'recruiter') {
            // order the requested data according to database
            orderedData = Extractdata.CompanySignUp(req.body)
            if (VALID_MODE == true)
                var { error } = JoiValidation.signupRecruiter(orderedData.orderedData)
        }
        else {
            if (VALID_MODE == true)
                var { error } = JoiValidation.signupSeeker(req.body)
        }

        if (error) {
            next(error.message)
        }

        else {
            const { firstName, lastName, email, password } = req.body
            // first check whether a user is registered with this email
            const user = await User.findOne({ where: { email: email } });

            if (user === null) {
                // insert into database
                User.create({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password
                }).then(response => {
                    if (registerType == 'recruiter') {
                        console.log(orderedData)
                        // insertion for employer start
                        response.createCompany(orderedData.orderedData)
                        // insertion for employer end
                    }
                    res.json({ message: "account created successfully" })
                }).catch(error => {
                    return next(error)
                })
            } else {
                return next(CustomErrorHandler.alreadyExist("Email already Exists"))
            }
        }
    }

    catch (error) {
        res.json({ error: error.message })
    }
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const imageUpload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')


export { registercontroller, imageUpload }