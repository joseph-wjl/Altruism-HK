import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import acupunctureImg from '../assets/images/acupuncture.jpg';
// import Nav from '../components/Nav'
// import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
        <div className="hero">
            <h1>Discover the ways to unlock good health so you can be carefree and fly free.</h1>
            <h3>Get personalized support and guidance, ensuring that you have everything you need to nourish your body and transform your life.</h3>
            <button id="learnmore-btn" 
                onClick={() => document.getElementById('card-section').scrollIntoView({behavior: 'smooth'})}>
                Learn more
            </button>
        </div>
        <div className="card-section" id="card-section">
            <div className="brief-card">
                <div className="brief-card-text">
                    <h2>Mindset matters, more than you think.</h2>
                    <h3>Understanding the importance of mental health is key. That's why we start with a full evaluation to make sure we're touching on important factors in your relationship with food and wellness.</h3>
                </div>
                <img src={acupunctureImg} className="brief-card-img"></img>
            </div>
            <div className="brief-card reverse-card">
                <div className="brief-card-text">
                    <h2>Mindset matters, more than you think.</h2>
                    <h3>Understanding the importance of mental health is key. That's why we start with a full evaluation to make sure we're touching on important factors in your relationship with food and wellness.</h3>
                </div>
                <img src="images/home-img2.jpg" className="brief-card-img"></img>
                <div className="brief-card-img"></div>
            </div>
        </div>
        <div className="wellness-section">
            <h2>Experience a new level of wellness — with Altruism.</h2>
        </div>
        </>
    )
}