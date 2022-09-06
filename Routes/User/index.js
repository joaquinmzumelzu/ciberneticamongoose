const express = require('express')
const User = require('../../Schemas/User')

const router = express.Router()
const axios = require('axios')


router.post('/login', async (req, res) => {
    const {name, email, profileImg } = req.body
    try {
      const checkUser = await User.findOne({email})
      if(checkUser) return res.status(200).json({message: 'User already exists'})
      const user = await User.create({name, email, profileImg})
      res.json({message: 'User created', user})    
    } catch (error) {
      res.status(500).json({message: 'Something went wrong'})  
    }
})

router.post('/getUserIdByEmail', async (req, res) => {
    const {email} = req.body
    try {
      const response = await User.findOne({email})
      res.json(response._id) 
    } catch (error) {
      console.log('error', error)
    }
})

module.exports = router


