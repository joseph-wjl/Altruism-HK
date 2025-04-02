import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="layout-container-desktop">
            <div className="email-section">
                <h4>Join Altruism</h4>
                <input type="email" placeholder="Enter your email address" id="email-input"></input>
                <button>Subscribe</button>
            </div>
            <div className="links-container-desktop">
                <div className="social-section">
                    <a href="https://www.instagram.com/altruism.hk/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                        
                    <a href="https://www.facebook.com/altruism.hk/?locale=zh_HK" target="_blank">
                        <i class="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCnl04Traq89u1ppFELVrqZg" target="_blank">
                        <i class="fa-brands fa-youtube"></i>
                    </a>    
                    <a href="https://api.whatsapp.com/send/?phone=85297025909&text&type=phone_number&app_absent=0" target="_blank">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
                <div className="footer-nav-section">
                    <Link to='pages/About' className='navbar-link'>About</Link>
                    <Link to='pages/Team' className='navbar-link'>Our Team</Link>
                    <Link to='pages/Equipment' className='navbar-link'>Our Equipment</Link>
                    <Link to='pages/Contact' className='navbar-link'>Contact Us</Link>
                </div>
            </div>
            </div>
            
            <div className="copyright-section">
                <p>Copyright ©2025 Altruism Healthcare Limited. All rights reserved.</p>
            </div>
        </footer>
    )
}