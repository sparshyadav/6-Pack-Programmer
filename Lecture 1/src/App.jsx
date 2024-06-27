import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Store from './components/Store'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/store' element={<Store />} />
        <Route path='*' element={<div>Page Not Found - Error 404</div>} />
      </Routes>
    </Router>
  )
}

export default App
