import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact(){
    return (
        <>
            <div className="contact-container">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.824208761748!2d114.15264137480318!3d22.28464794346354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401c83fd3f82f%3A0x1154cb27546752f3!2sAltruism%20Healthcare!5e0!3m2!1sen!2shk!4v1743612410192!5m2!1sen!2shk" 
                        width="400" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="contact-form-container">
                    <h1>Contact us</h1>
                    <p></p>
                    <form className="contact-form">
                        <label for="name">First name</label>
                            <input type="text" name="First name" placeholder="First name" required></input>
                        <label for="name">Last name</label>
                            <input type="text" name="Last name" placeholder="Last name" required></input>
                        <label for="email">Email</label>
                            <input type="email" name="Email" placeholder="Email" required></input>
                        <label for="phone">Phone</label>
                            <input type="text" name="Phone" placeholder="Phone" required></input>
                        <label for="message">Message</label>
                            <textarea name="Message" placeholder="Leave a message" required></textarea>
                        <submit type="submit" value="Submit" className="submit-btn">Submit</submit>
                    </form>
                </div>
                <img src="/images/contact-clinic.avif" className="contact-img"></img>
                <div className="contact-details">
                    <div className="contact-details-containers">
                        <p><span className="bold">Email: </span> <a href="mailto:cs@altruism.hk">cs@altruism.hk</a></p>
                        <p><span className="bold">Tel: </span>(852) 2901 1211</p>
                        <p><span className="bold">Fax: </span>(852) 2901 1288</p>
                        <p><span className="bold">Whatsapp: </span>(852) 9702 5909</p>
                    </div>
                    <div className="contact-details-containers">
                        <p><span className="bold">Clinic hour: </span></p>
                        <p>Monday to Friday: 10:00 - 19:00</p>
                        <p>Saturday: 10:00 - 17:00</p>
                        <p>Sunday & General holidays: Closed</p>
                    </div>
                    <div className="contact-details-containers">
                        <p><span className="bold">Address: </span></p>
                        <p>G/F, 2 Tit Hong Lane, Central, Hong Kong</p>
                    </div>
                </div>
            </div> 
        </>
        
    )
}