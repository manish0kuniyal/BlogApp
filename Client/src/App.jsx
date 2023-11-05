import React from 'react'
import Login from './components/login'
import Register from './components/register'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Layout from './components/layout'
import {UserContextProvider} from './usercontext'
import Post from './components/post'

const App = () => {
  return (
      
  <UserContextProvider>
      <div className='App'>
      
      <Routes>
           <Route path='/' element={<Layout/>}>  
           <Route path='/login' element={<Login/>} />
           <Route path='/register' element={<Register/>} />
           <Route path='/create' element={<Post/>}/>
           </Route> 
         </Routes>
      </div>
      </UserContextProvider>
    

  )
}

export default App