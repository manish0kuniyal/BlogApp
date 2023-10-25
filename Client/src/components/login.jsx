import React from 'react'

const Login = () => {
  return (
    <div className='mx-[auto] h-[50vh] p-3 w-[95%] sm:w-[60%] md:w-[40%]  '>
      <form className='flex flex-col justify-evenly my-2 mt-6'>
        <h1 className='font-bold text-[2rem]'>Login</h1>
        <input type='text' placeholder='username' className='font-mono border-2 my-4 p-1'/>
        <input type='password' placeholder='password' className='font-mono  border-2 mb-4 p-1'/>
        <button className='border-2 w-[30%] px-2 pb-1 rounded-[10px] hover:text-white  hover:bg-black  hover:border-0'>Login</button>
      </form>
    </div>
  )
}

export default Login
