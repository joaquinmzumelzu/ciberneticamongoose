require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')

const {COINBASE_API_KEY, COINBASE_WEBHOOK_SECRET } = process.env
const {Client, resources, Webhook} = require('coinbase-commerce-node')
const {Charge} = resources

Client.init(COINBASE_API_KEY)

router.post('/', async (req,res) => {
    try {
        const {amount, name, description} = req.body
        const charge = await Charge.create({
            name: 'name',
            description: 'description',
            local_price: {
                amount: amount,
                currency: 'USD'
            },
            pricing_type: 'fixed_price',
            metadata: {
                customer_id: 'id_1005',
                customer_name: 'Satoshi'
            }
        })
        res.json({clientSecret: charge})
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/payment-handler', (req,res) => {
    const rawBody = req.rawBody;
    const signature = req.headers["x-cc-webhook-signature"];
    const webhookSecret = COINBASE_WEBHOOK_SECRET;
    let event;

    try {
        event = Webhook.verifyEventBody(rawBody, signature, webhookSecret);
        if(event.type === 'charge:confirmed'){
            console.log(event)
        }
        if(event.type === 'charge:created'){
            console.log({eventhere: event})
            res.json({ok:event})
        }
        res.json({ok: "ok"})
    } catch (error) {
        
    }
} )

module.exports = router

