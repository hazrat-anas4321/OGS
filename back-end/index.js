import express from 'express'
const app = express()
const port = 3000
import sequelize from './config/db.js'

// Environment Variables
import { DEV_PORT } from './config/index.js'
import User from './models/User.js'

app.get('/', (req, res) => res.send('Welcome to OGS server'))

sequelize.sync().then(res => {

    app.listen(port, () => console.log(`OGS server started on port ${DEV_PORT}!`))
}).catch(error => {
    console.log(error)
})