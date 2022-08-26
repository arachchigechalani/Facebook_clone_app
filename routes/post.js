const express=require('express')
const router=express.Router()
const Post=require('../models/post.model')

var multiparty = require('multiparty');
const fs = require("fs");



router.post('/createPost',async(req,res)=>{

    var form = new multiparty.Form();
    form.parse(req, async(err, fields, files)=> {

        if(files.body==undefined){
        const post=new Post({
        userId : fields.userId[0],
        date : fields.date[0],
        time : fields.time[0],
        title : fields.title[0],
        body : fields.body[0]
    })

 const response=await post.save()
 response!=null ? res.json({code:'200',message:'create post successfull',data:null}) :
                  res.json({code:'500',message:'create post Faild',data:null})
                   
        }else{

        var img = fs.readFileSync(files.body[0].path);
        var encode_img = img.toString('base64');
        
         const body=  Buffer.from(encode_img,'base64')

      const post=new Post({
        userId : fields.userId[0],
        date : fields.date[0],
        time : fields.time[0],
        title : fields.title[0],
        body : body
   })
   const response=await post.save()
   response!=null ? res.json({code:'200',message:'create post successfull',data:null}) :
                  res.json({code:'500',message:'create post Faild',data:null})

        }
    });

})
module.exports=router