const express = require("express")
const cors = require('cors')
const UserRoutes = require('./routes/UserRoutes')
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.use('/', UserRoutes)

app.listen(port, () => console.log(`Server is listening on port ${port}`))