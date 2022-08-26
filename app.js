const express = require('express')
const mongoose=require('mongoose')
const app = express()

const port = 8000

const user=require('./routes/user')
const post=require('./routes/post')


const url='mongodb://localhost/facebook'
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB conneted..!')
})



app.use(express.json())
app.use('/user',user)
app.use('/post',post)


app.listen(port, (req,res) => {
  console.log(`server API started on port 8000`)
})