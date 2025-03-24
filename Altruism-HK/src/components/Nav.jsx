import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg" >
            <a href="#" className="navbar-brand">Altruism</a>
            <button className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='pages/Home' className='navbar-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='pages/Team' className='navbar-link'>Team</Link>
                    </li>
                        <li className="nav-item">
                    <Link to='pages/Contact' className='navbar-link'>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='pages/About' className='navbar-link'>About</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}