import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="email-section">
                <h4>Join Altruism</h4>
                {/* <label for="email-input" >Email address</label> */}
                <input type="email" placeholder="Enter your email address" id="email-input"></input>
                <button>Subscribe</button>
            </div>
            <div className="social-section">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-square-facebook"></i>
            </div>
            <div className="footer-nav-section">
                <p>About</p>
                <p>Our Team</p>
                <p>Our Equipment</p>
                <p>Contact Us</p>
            </div>
            <div className="copyright-section">
                <p>Copyright ©2025 Altruism Healthcare Limited. All rights reserved.</p>
            </div>
        </footer>
    )
}