const express = require('express')
const router = express.Router()

const {sk_stripe} = require('../../index.js')
const stripe = require('stripe')('sk_test_51LcOccAk41Yx3PJS4rMTB8wNblHIM7D0kFHqtQ3i8zqRT7bjOZto95RCsBkco6UZTJ0BLJmtPCMJ7N2H0pDkeWjA00F7fY1UOv')

router.post('/', async (req, res) => {
    console.log(sk_stripe)
    try {
        const {amount} = req.body
        console.log(amount)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount * 100).toFixed(0),
            currency: 'usd',
            automatic_payment_methods: { enabled: true }
        })
        res.json({clientSecret: paymentIntent.client_secret})       
        
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router