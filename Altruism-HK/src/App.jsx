import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Services from './pages/Services'
import Fees from './pages/Fees'
import Equipment from './pages/Equipment'
import Contact from './pages/Contact'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Team" element={<Team />} />
        <Route path="/pages/Services" element={<Services />} />
        <Route path="/pages/Fees" element={<Fees />} /> 
        <Route path="/pages/Equipment" element={<Equipment />} />
        <Route path="/pages/Contact" element={<Contact />} />
      </Route>  
      </Routes>
    </BrowserRouter>
  )
}