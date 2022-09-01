const { Router } = require('express')
const router = Router()

const User = require('./User/index.js')
const Payment = require('./Payment/index.js')
const Coinbase = require('./Coinbase/index.js')

router.use('/user', User )
router.use('/payment', Payment)
router.use('/coinbase', Coinbase)

module.exports = router