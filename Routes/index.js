const { Router } = require('express')
const router = Router()

const Utils = require('./Utils/index.js')

const User = require('./User/index.js')
const Payment = require('./Payment/index.js')
const Coinbase = require('./Coinbase/index.js')
const Paypal = require('./Paypal/index.js')
const Services = require('./Services/index.js')
const Sales =  require('./Sales/index.js')

router.use('/utils', Utils)

router.use('/user', User )
router.use('/payment', Payment)
router.use('/coinbase', Coinbase)
router.use('/paypal', Paypal)
router.use('/services', Services)
router.use('/sales', Sales)

module.exports = router