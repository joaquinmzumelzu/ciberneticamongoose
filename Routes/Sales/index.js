require('dotenv').config()
const express = require('express')
const router = express.Router()

const Sale = require('../../Schemas/Sales')

router.post('/createNewSale', async (req,res) => {
    const {userId, serviceId} = req.body
    console.log('useridaqui',userId)
    try {
        const response = await Sale.create({userId, serviceId})
        res.json({message: 'Sale created', response})   
    } catch (error) {
        console.log({createSale: error})
        res.status(400).json({error:error.message})
    }
})




module.exports = router