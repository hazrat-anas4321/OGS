import express from 'express'
const userRouter = express.Router()
import auth from '../middlewares/auth/auth.js'
import { registercontroller, imageUpload, signincontroller, ProfileController } from '../controllers/userController.js'

// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
userRouter.post('/', imageUpload, registercontroller)
userRouter.post('/signin', signincontroller)
userRouter.get('/me', auth, ProfileController)
// userRouter.get('/me', auth, usermecontroller) 


export default userRouter 
