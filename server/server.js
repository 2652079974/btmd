const express = require('express')
const cors = require("cors")

const app = new express()
const user = require('./router/user')

app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use('/api', user)

app.use(express.static('./dist'))

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})