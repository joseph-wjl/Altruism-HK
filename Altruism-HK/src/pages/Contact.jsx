import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact(){
    return (
        <>
            <div className="contact-container">
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