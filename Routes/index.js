const { Router } = require('express')
const router = Router()

const User = require('./User/index.js')

router.use('/user', User )

module.exports = router