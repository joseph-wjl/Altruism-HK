import React from 'react'
import './BackToTop.css'

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="back-to-top-btn" onClick={scrollToTop}>Back to top</div>
    )
}