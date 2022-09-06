require('dotenv').config()
const express = require('express')
const router = express.Router()

const Service = require('../../Schemas/Service')
const Sale = require('../../Schemas/Sales')

router.post('/createService', async (req,res) => {
    const {name, description, value, img} = req.body
    try {
        const response = await Service.create({name, description, value, img})
        res.json({message: 'Service created', response})
    } catch (error) {
        console.log({createService: error})
        res.status(400).json({error:error.message})
    }
})

router.post('/test-sale', async (req,res) => {
    const {userId, serviceId} = req.body
    try {
        const response = await Sale.create({userId, serviceId})
        res.json({message: 'Sale created', response})
    } catch (error) {
        console.log({createSale: error})
        res.status(400).json({error:error.message})
    }
})

router.get('/getServices/:userId', async (req,res) => {
    const {userId} = req.params
    try {
        let response = await Sale.find({userId})
        response = await Promise.all(response.map(async (saleDetails) => {
            let serviceDetails = await Service.findById(saleDetails.serviceId, 'name img _id')
            let obj = {saleDetails, serviceDetails}
            return obj
        }))
        res.json({message: 'Sales ->', response})
    } catch (error) {
        console.log({getServices: error})
        res.status(400).json({error:error.message})
    }
})


module.exports = router
