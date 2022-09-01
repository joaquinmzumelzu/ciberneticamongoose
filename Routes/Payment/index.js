require('dotenv').config();
const express = require('express')
const router = express.Router()
const {STRIPE_SECRET_KEY} = process.env

const stripe = require('stripe')(STRIPE_SECRET_KEY)


router.post('/', async (req, res) => {

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