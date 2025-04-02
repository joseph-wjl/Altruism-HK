import React from 'react'
import { Link } from 'react-router-dom'
// import Nav from '../components/Nav'
// import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
        {/* <Nav /> */}
        <div className="hero">
            <h1>"From the heart" makes you healthy, comfortable,
            The truth of flying freely!</h1>
            <h3>Get personalized support and guidance, ensuring that you have everything you need to nourish your body and transform your life.</h3>
            <button id="learnmore-btn">Learn more</button>
        </div>
        <div className="card-section">
            <div className="brief-card">
                <div className="brief-card-text">
                    <h2>Mindset matters, more than you think.</h2>
                    <h3>Understanding the importance of mental health is key. That's why we start with a full evaluation to make sure we're touching on important factors in your relationship with food and wellness.</h3>
                </div>
                <img src="images/acupuncture.jpg" className="brief-card-img"></img>
            </div>
            <div className="brief-card reverse-card">
                <div className="brief-card-text">
                    <h2>Mindset matters, more than you think.</h2>
                    <h3>Understanding the importance of mental health is key. That's why we start with a full evaluation to make sure we're touching on important factors in your relationship with food and wellness.</h3>
                </div>
                <img src="images/massage.jpg" className="brief-card-img"></img>
            </div>
            
        </div>  
        {/* <Footer /> */}
        </>
    )
}