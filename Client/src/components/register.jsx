import React from 'react'
import { useState } from 'react'

async function RegisterForm(event){
event.preventDefault()
await fetch('http://localhost:5000/register',{
  method:'POST', 
  body:JSON.stringify({username,password}),
  headers:{'Content-Type':'application/json'}
})


}

const Register = () => {
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')

  return (
    <div>
       <div className='mx-[auto] h-[50vh] p-3 w-[95%] sm:w-[60%] md:w-[40%]  '>
      <form className='flex flex-col justify-evenly my-2 mt-6' onSubmit={RegisterForm}
      >
        <h1 className='font-bold text-[2rem]'>Register</h1>
        <input type='text' 
         placeholder='username'
         className='font-mono border-2 my-4 p-1'
         value={username}
         onChange={event=>setusername(event.target.value)}
         />
        <input type='password' 
        placeholder='password' 
        className='font-mono  border-2 mb-4 p-1'
        value={password}
        onChange={event=>setpassword(event.target.value)}
        />
        <button className='border-2 w-[30%] px-2 pb-1 rounded-[10px] hover:text-white  hover:bg-black  hover:border-0'>Register</button>
      </form>
    </div>
    </div>
  )
}

export default Register
