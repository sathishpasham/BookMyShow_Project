const express=require('express')
const app=express()
require('dotenv').config()
const dbConfig=require('./config/dbConfig')
const userRoute=require('./Routes/userRoute')
app.use(express.json())
app.use('/',userRoute)







app.listen(8097,()=>{
    console.log('server has started at the given port!')
})
