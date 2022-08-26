const express=require('express')
const router=express.Router()
const User=require('../models/user.model')

router.post('/login',async(req,res)=>{
    const response= await User.findOne({email : req.body.email , password : req.body.password});
    response!=null ? res.json({code:'200',message:'login  successfull',data:response.surname}) : 
                    res.json({code:'500',message:'login faild',data:null})
 
 })

router.put('/updateProfile/:email' ,async(req,res)=>{
 const response = await User.findOneAndUpdate({email : req.params.email} , req.body)
 response!=null ? res.json({code:'200',message:'profile update successfull',data:null}) : 
                  res.json({code:'500',message:'profile update faild',data:null})


})

router.post('/createAccount',async(req,res)=>{
      try {

    
     const re= await User.findOne({ email: req.body.email});
     if(re==null){
        const user=new User({
        firstName:req.body.firstName,
        surname:req.body.surname,
        gender:req.body.gender,
        dateOfBirth:req.body.dateOfBirth,
        phoneNumber:req.body.phoneNumber,
        email : req.body.email,
        password : req.body.password
      })

        const response=await user.save();
        response != null ? res.json({code:'200',message:'Account create successfull',data:null}) : 
                           res.json({code:'500',message:'User Account Create Fail',data:null});
      }else{
      res.json({code:'500',message:'Email is AllreadyExists',data:null});
     }


      // tools.existsUser()

       
      
        // 
        // 
      
        
      } catch (error) {
        res.send('Err'+error)
      }
})


router.post('/login',(req,res)=>{
    res.send('login account')
})
module.exports=router