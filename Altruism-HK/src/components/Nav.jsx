import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">Altruism</a>
            <ul className="navbar-nav">
                <Link to='pages/Home' className='navbar-link'>Home</Link>
                <Link to='pages/Team' className='navbar-item'>Team</Link>
                <Link to='pages/Contact' className='navbar-item'>Contact</Link>
                <Link to='pages/About' className='navbar-item'>About</Link>
            </ul>
        </nav>
    )
}