import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
    
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    function toggleNav() {
        setIsNavOpen(!isNavOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true); 
            } else {
                setIsScrolled(false); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="container bg-light" >
            <nav className={`navbar navbar-light navbar-expand-lg ${isNavOpen || isScrolled? 'navbar-white' : ''}`}>
                <a href="#" className={`navbar-brand ${isNavOpen || isScrolled? 'navbar-brand-black' : ''}`}>Altruism</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuItems"
                    aria-controls="menuItems"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                    onClick={toggleNav}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuItems">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className='navbar-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='pages/About' className='navbar-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='pages/Team' className='navbar-link'>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='pages/Services' className='navbar-link'>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='pages/Fees' className='navbar-link'>Fees</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='pages/Equipment' className='navbar-link'>Equipment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='pages/Contact' className='navbar-link'>Contact</Link>
                            {/* <a href="#" className="nav-link">Contact</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            
        // <nav className="navbar navbar-light navbar-expand-lg" >
        //     <a href="#" className="navbar-brand">Altruism</a>
        //     <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarCollapse">
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <Link to='pages/Home' className='navbar-link'>Home</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='pages/Team' className='navbar-link'>Team</Link>
        //             </li>
        //                 <li className="nav-item">
        //             <Link to='pages/Contact' className='navbar-link'>Contact</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='pages/About' className='navbar-link'>About</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        
    )
}