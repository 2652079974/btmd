const express = require('express')
const userHandler = require('../handler/user')


const router = express.Router()

router.post('/register', userHandler.register)




module.exports = router