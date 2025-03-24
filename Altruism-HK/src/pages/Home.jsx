import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Home() {
    return (
        <>
        <Nav />
        <Link to='pages/About'>About</Link>
        <div className="hero">
            <h1>"From the heart" makes you healthy, comfortable,
            The truth of flying freely!</h1>
            <button id="learnmore-btn">Learn more</button>
        </div>
        <div className="card-section">
            <div className="brief-card">
                <div>
                    <h2>Mindset matters, more than you think.</h2>
                    <h3>Understanding the importance of mental health is key. That's why we start with a full evaluation to make sure we're touching on important factors in your relationship with food and wellness.</h3>
                </div>
                <img src="images/acupuncture.jpg"></img>
            </div>
            <div className="brief-card">
                <img src="images/massage.jpg"></img>
                <div>
                    <h2>Mindset matters, more than you think.</h2>
                    <h3>Understanding the importance of mental health is key. That's why we start with a full evaluation to make sure we're touching on important factors in your relationship with food and wellness.</h3>
                </div>
            </div>
            
        </div>  
        <div></div>
        <div></div>
        </>
    )
}