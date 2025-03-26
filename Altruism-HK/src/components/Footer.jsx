import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <h4>Join Altruism</h4>
            <label for="email-input">Email address</label>
            <input type="email" placeholder="Enter your email address" id="email-input"></input>
            <button>Subscribe</button>
            <div id="social">
                <p>Social</p>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
            <p>©2022 Altruism Healthcare Limited</p>
            <p>All Rights Reserved</p>
        </footer>
    )
}