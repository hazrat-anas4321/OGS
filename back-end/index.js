import express from 'express'
const app = express()
const port = 3000

import UserType from './models/UserType.js'
import User from './models/User.js'
import BusinessType from './models/CompanyProfile/BusinessType.js'
import Company from './models/CompanyProfile/Company.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import Degree from './models/Degree.js'
import Job from './models/Job.js'
import { FunctionalArea } from './models/Index.js'
FunctionalArea.sync()
FunctionalArea.create({
    name: "Accountin"
})

// Environment Variables
import { DEV_PORT } from './config/index.js'
// MiddleWares

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/images', express.static('./images'))
// Relations Start
// one user type has many user accounts
UserType.hasMany(User);
User.belongsTo(UserType);

// Business Type(streams) Realtions with companies
BusinessType.hasMany(Company)
Company.belongsTo(BusinessType)
Company.belongsTo(User, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT'
})
User.belongsTo(Company)
// Jobs and Degree Level
User.hasMany(Job, {
    foreignKey: 'posted_by_id'
})

Degree.hasMany(Job, {
    foreignKey: 'degree_level_id'
})
// Skill Table Relation
// Job.belongsToMany(Skill, { through: JobSkill });
// Skill.belongsToMany(Job, { through: JobSkill });
// Relations End

// import Routes start
import userRouter from './routes/user.js'
import jobRouter from './routes/job.js'
import errorhandler from './middlewares/errorHandler.js'
// import Routes end

// /register

app.use('/test', (req, res, next) => {
    console.log(req.body)
})
// consume routes start
app.use('/users', userRouter)
app.use('/jobs', jobRouter)
// consume routes end
app.get('/', (req, res) => res.send('Welcome to OGS server'))
app.use(errorhandler)
// sequelize.sync({
//     alter: true,
// }).then(res => {
//     app.listen(DEV_PORT, () => console.log(`OGS server started on port ${DEV_PORT}!`))
// }).catch(error => {
//     console.log(error)
// })
app.listen(DEV_PORT, () => console.log(`OGS server started on port ${DEV_PORT}!`))