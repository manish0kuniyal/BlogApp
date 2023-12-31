import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../usercontext'
const Navbar = () => {

   const {setUserInfo,userInfo}=useContext(UserContext)
   
  useEffect(()=>{
    fetch('http://localhost:5000/profile',{
      credentials:'include', 
    }).then(res=>{
      res.json().then(userInfo=>{
        setUserInfo(userInfo)
      })
    })
  },[])

  function logout(){
    fetch('http://localhost:3000/logout',{
      credentials:'include',
      method:'POST',
    })
    setUserInfo(null)
  }
 const username=userInfo?.username
  return (
<div>
    <div className='flex justify-between items-center  mt-4  mb-[10%] lg:mb-[5%]'>
      <Link to='/'>  <h2 className='font-bold font-sans text-[1.2rem] sm:text-[1.4rem]'>PortBlog</h2></Link>
         
         <div className='text-[.9rem] sm:text-[1rem] flex  font-bold text-gray-600' >
         {username &&(
          <>
          <Link to='/create'>Create a Post</Link>
          <a className='cursor-pointer' onClick={logout} >Logout</a>
          </>
         )}
         {!username &&(
          <>
           <Link to="/login"> <a className='mr-[10px]'>Login</a></Link>
        <Link to="/register"><a>Register</a></Link> 
        
          </>
         )}
         </div>

    </div>
</div>
  )
}

export default Navbar
