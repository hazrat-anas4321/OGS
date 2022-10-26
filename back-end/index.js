import express from 'express'
const app = express()
const port = 3000
import sequelize from './config/db.js'
import UserType from './models/UserType.js'
import User from './models/User.js'
import BusinessType from './models/CompanyProfile/BusinessType.js'
import Company from './models/CompanyProfile/Company.js'
import cors from 'cors'
import bodyParser from 'body-parser'


// Environment Variables
import { DEV_PORT } from './config/index.js'
// MiddleWares

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/images', express.static('./images'))
// Relations
// one user type has many user accounts
UserType.hasMany(User);
User.belongsTo(UserType);

// Business Type(streams) Realtions with companies
BusinessType.hasMany(Company)
Company.belongsTo(BusinessType)
User.belongsTo(Company)
// Relations

// import Routes start
import userRouter from './routes/user.js'
import errorhandler from './middlewares/errorHandler.js'
// import Routes end

// /register


// consume routes start
app.use('/users', userRouter)
// consume routes end


app.get('/', (req, res) => res.send('Welcome to OGS server'))
app.use(errorhandler)
sequelize.sync().then(res => {
    app.listen(DEV_PORT, () => console.log(`OGS server started on port ${DEV_PORT}!`))
}).catch(error => {
    console.log(error)
})