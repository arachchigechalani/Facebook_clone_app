const express = require('express')
const User = require('../models/user.model')

const existUser=async()=>{
    const users=await User.find()
    for(const ob of users){
        console.log(ob.surname)
    }
}
module.exports={existUser}