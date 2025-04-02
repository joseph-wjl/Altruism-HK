import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

export default function About(){
    return (
        <>
            <div className="about-container">
                <h2>Treating with <span id="altruism">Altruism</span> is our philosophy.</h2>
                <div className="about-text-container">
                    <p>
                        Seagulls are free and at ease; they follow their hearts and 
                    fly freely and unrestrainedly between heaven and earth with 
                    beautiful postures; they are harmonious but not swayed, flowing 
                    but not vulgar, and are good at making friends with people; 
                    this is what makes seagulls noble and holy! 
                    We adhere to the concept of "treating people from the heart" and 
                    treat every one of you with kindness and compassion
                    </p>
                    <p>
                        Inheriting traditional Chinese medicine culture, providing 
                    treatment plans that keep pace with the times, and combining 
                    Chinese and Western medical concepts, we follow nature, grasp 
                    the changes of the four seasons, regulate the body and mind in 
                    time, and achieve the way of health preservation.
                    </p>
                    <p>
                        Having a strong body will make you and your family as free as 
                    seagulls, pursuing an ideal life of freedom!
                    </p>
                </div>
                
                <img src="/images/seagull.avif" className="about-img"></img>
            </div>
            
        </>
        
    )
}