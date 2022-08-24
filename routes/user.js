const express=require('express')
const router=express.Router()
const User=require('../models/user.model')







const userUtil=require














router.get('/',async(req,res)=>{
    const response= await User.find()
    res.json(response)
})



router.post('/createAccount',async(req,res)=>{
      
    const user=new User({
           firstName : req.body.firstName,
           surname : req.body.surname,
           gender : req.body.gender,
           dateOfBirth : req.body.dateOfBirth,
           password : req.body.password,
           phoneNumber : req.body.phoneNumber,
           email : req.body.email,
        })
      
        try {
           const response=await user.save();
             res.send("user register complete")
        } catch (error) {
            res.send(error)
        }
})


module.exports=router
