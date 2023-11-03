import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    
    <div className='mx-[7%]'>
          <Navbar/>
          <Outlet/>
    </div>
  )
}

export default Layout
