const express = require('express')
const router = express.Router()

const Service = require('../../Schemas/Service')
const Sale = require('../../Schemas/Sales')

router.get('/getServiceBuyCard/:id', async (req,res) => {
    const {id} = req.params
    try {
        let response = await Service.findById(id, 'name img value description _id')
        res.json(response)
    } catch (error) {
        console.log({getServiceBuyCard: error})
        res.status(400).json({error:error.message})
    }
})

module.exports = router