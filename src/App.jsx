import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import Discover from './Components_/Discover'
import Dashboard from './Components_/Dashboard'
import Home from './Components_/Home'
import LoginPage from './Components_/LoginPage'
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<LoginPage/> }/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/discover' element={<Discover/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
