const express = require('express')
const mongoose=require('mongoose')
const app = express()


const port = 8000
const user=require('./routes/user')

const url='mongodb://localhost/express'
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB conneted..!')
})

app.use(express.json())
app.use('/user',user)


app.listen(port, (req,res) => {
  console.log(`server API started on port 8000`)
})