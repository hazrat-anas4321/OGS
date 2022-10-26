import express from 'express'
const userRouter = express.Router()
import { registercontroller, imageUpload } from '../controllers/userController.js'

// const usermecontroller = require('../controllers/usermecontroller')
import auth from '../middlewares/auth/auth.js'
// Register/Add Users to DataBase\
userRouter.post('/', imageUpload, registercontroller)
// userRouter.get('/me', auth, usermecontroller) 


export default userRouter 
