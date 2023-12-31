import React, { useContext, useState } from 'react'
import {Navigate} from 'react-router-dom'
import { UserContext } from '../usercontext'
const Login = () => {
const [username ,setusername]=useState('')
const [password ,setpassword]=useState('')
const [redirect,setredirect]=useState(false)
const {setUserInfo}=useContext(UserContext)
async function Login(event){
  event.preventDefault()
  const response=await fetch('http://localhost:5000/login',{
    method:"POST",
    body:JSON.stringify({username , password}),
    headers:{'Content-Type':'application/json'},
    credentials:'include'
  })
  if(response.ok){
    response.json().then(userInfo=>{
      setUserInfo(userInfo)
    setredirect(true)  
    })
  }
  else{
    alert('User Not Found')
  }
  }

  if(redirect){
    return <Navigate  to={'/'}/>
  }


  return (
    <div className='mx-[auto] h-[50vh] p-3 w-[95%] sm:w-[60%] md:w-[40%]  '>
      <form className='flex flex-col justify-evenly my-2 mt-6'
      onSubmit={Login}
      >
        <h1 className='font-bold text-[2rem]'>Login</h1>

        <input type='text' 
        placeholder='username'
        className='font-mono border-2 my-4 p-1'
        value={username}
        onChange={event=>setusername(event.target.value)}
        />

        <input 
        type='password' 
        placeholder='password' 
        className='font-mono  border-2 mb-4 p-1'
        value={password}
        onChange={event=>setpassword(event.target.value)}
        />

        <button className='border-2 w-[30%] px-2 pb-1 rounded-[10px] hover:text-white  hover:bg-black  hover:border-0'>Login</button>

      </form>
    </div>
  )
}

export default Login
