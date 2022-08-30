const { Router } = require('express')
const router = Router()

const User = require('./User/index.js')
const Payment = require('./Payment/index.js')

router.use('/user', User )
router.use('/payment', Payment)

module.exports = router