import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Correctly define the route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
