const express=require('express')
const cors =require('cors')
const app=express()

app.use(express.json())
app.use(cors())

app.post('/register',(req,res)=>{
    const {username,password}=req.body;
    res.body({requestedData:{username,password}})
    console.log(username,password)
})

app.listen(5000,console.log("...on port 5000"))