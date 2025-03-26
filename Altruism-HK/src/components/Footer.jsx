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
                <p>Social</p>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
            <div className="copyright-section">
                <p>©2022 Altruism Healthcare Limited</p>
                <p>All Rights Reserved</p>
            </div>
        </footer>
    )
}