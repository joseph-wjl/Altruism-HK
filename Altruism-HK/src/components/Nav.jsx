import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to='pages/Home'>Home</Link>
                <Link to='pages/Team'>Team</Link>
                <Link to='pages/Contact'>Contact</Link>
                <Link to='pages/About'>About</Link>
            </ul>
        </nav>
    )
}