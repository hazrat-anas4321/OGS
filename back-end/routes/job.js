import express from 'express'
const jobRouter = express.Router()
import auth from '../middlewares/auth/auth.js'
import { JobPostController } from '../controllers/JobController.js'

// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
jobRouter.post('/', auth, JobPostController)
// jobRouter.get('/me', auth, usermecontroller) 


export default jobRouter 
