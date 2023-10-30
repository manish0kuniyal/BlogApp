const express=require('express')
const cors =require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const bcrypt=require('bcrypt')
const User=require('./mongo/user')
const jwt=require('jsonwebtoken')

const app=express()
const salt = bcrypt.genSaltSync(10);
const secret="k23n434jn"

dotenv.config()
app.use(express.json())
app.use(cors({credentials:true,origin:'http://localhost:3000'}))

mongoose.connect(process.env.URL,{
 useNewUrlparser:true
}).then(()=>console.log("...connected to db"))
.catch((err)=>console.log(err))


app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    try{ 
    const userDoc=await User.create({
        username,
        password:bcrypt.hashSync(password,salt)
    })

    res.json(userDoc)}
    catch(err){
        console.log(err)
        res.status(400).json(e)//used to send response to client
    }
})

app.post('/login',async(req,res)=>{
    const {username ,password}=req.body
    const userDoc=await User.findOne({username})
    const chckPswrd=bcrypt.compareSync(password,userDoc.password)
    // res.json(chckPswrd)
    console.log(chckPswrd )
    if(chckPswrd){
        jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
            if(err)
              throw err
               res.cookie('token',token).json('ok')
        })
    }
    else{
        res.status(400).json('wrong credentials')
    }
})


app.get('/profile',(req,res)=>{




    
})





app.listen(5000,console.log("...on port 5000"))