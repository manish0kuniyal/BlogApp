import React from 'react'
import Login from './components/login'
import Register from './components/register'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Layout from './components/layout'
const App = () => {
  return (<>
      <div className='App'>
      
      <Routes>
           <Route path='/' element={<Layout/>}>  
           <Route path='/login' element={<Login/>} />
           <Route path='/register' element={<Register/>} />
           </Route> 
         </Routes>
    
    </div>
    </>

  )
}

export default App