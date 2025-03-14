import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <div>
            <Home />
          </div>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
