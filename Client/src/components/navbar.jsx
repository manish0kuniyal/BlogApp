import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<div>
    <div className='flex justify-between items-center  mt-4  mb-[10%] lg:mb-[5%]'>
      <Link to='/'>  <h2 className='font-bold font-sans text-[1.2rem] sm:text-[1.4rem]'>PortBlog</h2></Link>
         
         <div className='text-[.9rem] sm:text-[1rem] flex  font-bold text-gray-600' >
         <Link to="/login"> <a className='mr-[10px]'>Login</a></Link>
        <Link to="/register"><a>Register</a></Link> 
         </div>

    </div>
</div>
  )
}

export default Navbar
