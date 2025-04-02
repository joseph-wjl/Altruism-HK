import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact(){
    return (
        <>
            <div className="contact-container">
                <img src="/images/contact-clinic.avif" className="contact-img"></img>
                <div className="contact-details">
                    <p><span className="bold">Email: </span> <a href="mailto:cs@altruism.hk">cs@altruism.hk</a></p>
                    <p><span className="bold">Tel: </span>(852) 2901 1211</p>
                    <p><span className="bold">Fax: </span>(852) 2901 1288</p>
                    <p><span className="bold">Whatsapp: </span>(852) 9702 5909</p>
                    <p><span className="bold">Clinic hour: </span></p>
                    <p>Monday to Friday: 10:00 - 19:00</p>
                    <p>Saturday: 10:00 - 17:00</p>
                    <p>Sunday & General holidays: Closed</p>
                    <p><span className="bold">Address: </span></p>
                    <p>G/F, 2 Tit Hong Lane, Central, Hong Kong</p>
                </div>
            </div> 
        </>
        
    )
}