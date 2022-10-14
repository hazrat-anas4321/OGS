const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to OGS server'))
app.listen(port, () => console.log(`OGS server started on port ${port}!`))